using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using AutoMapper;
using DataAccess.Repositories.Interfaces;
using Domain.Response;
using Domain.Services.Interfaces;
using Model.ControllerModel;
using Model.DomainModel;
using Model.Enum;
using MongoDB.Bson;

namespace Domain.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IClientRepository _clientRepository;
        private readonly IRestaurantRepository _restaurantRepository;
        private readonly IDishRepository _dishRepository;

        public OrderService(IOrderRepository orderRepository, IClientRepository clientRepository, IRestaurantRepository restaurantRepository, IDishRepository dishRepository)
        {
            if (orderRepository == null) throw new ArgumentNullException("orderRepository");
            if (clientRepository == null) throw new ArgumentNullException("clientRepository");
            if (restaurantRepository == null) throw new ArgumentNullException("restaurantRepository");
            if (dishRepository == null) throw new ArgumentNullException("dishRepository");

            _orderRepository = orderRepository;
            _clientRepository = clientRepository;
            _restaurantRepository = restaurantRepository;
            _dishRepository = dishRepository;
        }

        public IResponse Create(InsertOrderWithDishes insertOrder)
        {
            var response = new Response.Response();
            var order = new Order();

            order.Id = ObjectId.GenerateNewId().ToString();
            order.Username = insertOrder.Username;
            order.RestaurantId = insertOrder.RestaurantId;
            order.Status = OrderStatusType.Received;
            order.Dishes = insertOrder.Dishes;
            order.ConfirmationNumber = ObjectId.GenerateNewId().ToString();
            order.DeliveryTime = insertOrder.DeliveryTime;
            order.Address = insertOrder.Address;
            order.MenuId = insertOrder.MenuId;

            _orderRepository.Insert(order);

            var client = _clientRepository.GetSingle(c => c.Username == insertOrder.Username);
            SendOrderStatusToClient(order, client);

            response.Set(HttpStatusCode.Created, order.ConfirmationNumber);
            return response;
        }

        private void SendOrderStatusToClient(Order order, Client client)
        {
            var message = new MailMessage();
            message.To.Add(client.Email);
            message.Subject = ("Order Status #" + order.Id);
            message.From = new MailAddress("log210@log210.com");
            message.Body = "Your order status is : " + Enum.GetName(typeof(OrderStatusType), order.Status);
            var smtp = new SmtpClient();
            var basicCredential = new NetworkCredential("bqerbertbrt@outlook.com", "a1B2C3d4e5");
            smtp.Host = "smtp.live.com";
            smtp.UseDefaultCredentials = false;
            smtp.Port = 587;
            smtp.Credentials = basicCredential;
            smtp.EnableSsl = true;

            smtp.Send(message);
        }

        public IResponse GetAllOrderStatusByRestaurantId(string restaurantId)
        {
            var response = new Response.Response();

            var orders = _orderRepository.GetAll();

            if (!orders.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No order found");
                return response;
            }

            var restaurantOrders = orders.Where(o => o.RestaurantId == restaurantId);
            var restaurantOrderStatuses = new List<OrderStatus>();

            foreach (var restaurantOrder in restaurantOrders)
            {
                var orderStatus = Mapper.Map<Order, OrderStatus>(restaurantOrder);
                orderStatus.OrderId = restaurantOrder.Id;
                restaurantOrderStatuses.Add(orderStatus);
            }

            response.Set(HttpStatusCode.OK, restaurantOrderStatuses);

            return response;
        }

        public IResponse GetAllPendingOrder()
        {
            var response = new Response.Response();

            var orders = _orderRepository.GetAll();

            if (!orders.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No order found");
                return response;
            }

            var pendingOrder = orders.Where(o => o.Status == OrderStatusType.PreparationCompleted).ToList();

            response.Set(HttpStatusCode.OK, pendingOrder);

            return response;
        }

        public IResponse GetAllPendingOrderByRestaurantId(string restaurantId)
        {
            var response = new Response.Response();

            var orders = _orderRepository.GetAll();

            if (!orders.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No order found");
                return response;
            }

            var restaurantOrders = orders.Where(o => o.RestaurantId == restaurantId).ToList();
            var pendingOrder = restaurantOrders.Where(o => o.Status == OrderStatusType.PreparationCompleted).ToList();

            response.Set(HttpStatusCode.OK, pendingOrder);

            return response;
        }

        public IResponse GetAllPendingOrdersWithOrderInfo()
        {
            var response = new Response.Response();

            var orders = _orderRepository.GetAll();

            if (!orders.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No order found");
                return response;
            }

            var orderInfos = ConvertOrderToOrderInfos(orders.Where(o => o.Status == OrderStatusType.PreparationCompleted));

            response.Set(HttpStatusCode.OK, orderInfos);
            return response;
        }

        private List<OrderInfo> ConvertOrderToOrderInfos(IEnumerable<Order> orders)
        {
            var orderInfos = new List<OrderInfo>();

            foreach (var order in orders)
            {
                var orderInfo = new OrderInfo();
                orderInfo.Id = order.Id;
                orderInfo.DeliveryAddress = order.Address;

                var restaurant = _restaurantRepository.GetSingle(r => r.Id == order.RestaurantId);
                var restaurantThumbnail = new RestaurantThumbnail { Name = restaurant.Name, Address = restaurant.Address };

                orderInfo.RestaurantThumbnail = restaurantThumbnail;

                var dishThumbnails = new List<DishThumbnail>();

                foreach (var orderDish in order.Dishes)
                {
                    var dish = _dishRepository.GetSingle(d => d.Id == orderDish.DishId);
                    var dishThumbnail = new DishThumbnail { Name = dish.Name, Quantity = orderDish.Quantity };
                    dishThumbnails.Add(dishThumbnail);
                }

                orderInfo.Dishes = dishThumbnails;

                orderInfos.Add(orderInfo);
            }

            return orderInfos;
        }

        public IResponse GetAllPendingOrderWithOrderInfoByDeliveryManUsername(string username)
        {
            var response = new Response.Response();

            var orders = _orderRepository.GetAll();

            if (!orders.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No order found");
                return response;
            }

            var orderInfos = ConvertOrderToOrderInfos(orders.Where(o => o.Status == OrderStatusType.InDelivery && o.DeliveryManUsername == username));

            response.Set(HttpStatusCode.OK, orderInfos);
            return response;
        }

        public IResponse GetAll()
        {
            var response = new Response.Response();

            var orders = _orderRepository.GetAll();

            if (!orders.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No order found");
                return response;
            }

            response.Set(HttpStatusCode.OK, orders);

            return response;
        }

        public IResponse UpdateStatus(OrderStatus orderStatus)
        {
            var response = new Response.Response();

            var existingOrder = _orderRepository.GetSingle(o => o.Id == orderStatus.OrderId);
            if (existingOrder == null)
            {
                response.Set(HttpStatusCode.NotFound, "No order found");
                return response;
            }

            existingOrder.Status = orderStatus.Status;

            _orderRepository.Save(existingOrder);

            var client = _clientRepository.GetSingle(c => c.Username == existingOrder.Username);
            SendOrderStatusToClient(existingOrder, client);

            response.Set(HttpStatusCode.NoContent);
            return response;
        }

        public IResponse UpdateDeliveryManUsername(OrderDelivery orderDelivery)
        {
            var response = new Response.Response();

            var existingOrder = _orderRepository.GetSingle(o => o.Id == orderDelivery.OrderId);
            if (existingOrder == null)
            {
                response.Set(HttpStatusCode.NotFound, "No order found");
                return response;
            }

            existingOrder.Status = OrderStatusType.InDelivery;
            existingOrder.DeliveryManUsername = orderDelivery.DeliveryManUsername;

            _orderRepository.Save(existingOrder);

            var client = _clientRepository.GetSingle(c => c.Username == existingOrder.Username);
            SendOrderStatusToClient(existingOrder, client);

            response.Set(HttpStatusCode.NoContent);
            return response;
        }
    }
}