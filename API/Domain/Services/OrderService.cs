using System;
using System.Net;
using DataAccess.Repositories.Interfaces;
using Domain.Response;
using Domain.Services.Interfaces;
using Model.ControllerModel;
using Model.DomainModel;

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

        public IResponse Create(Order order)
        {
            throw new System.NotImplementedException();
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