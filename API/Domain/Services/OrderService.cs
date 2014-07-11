using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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

        public OrderService(IOrderRepository orderRepository)
        {
            if (orderRepository == null) throw new ArgumentNullException("orderRepository");

            _orderRepository = orderRepository;
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

            response.Set(HttpStatusCode.Created, order.ConfirmationNumber);
            return response;
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

            response.Set(HttpStatusCode.NoContent);
            return response;
        }
    }
}