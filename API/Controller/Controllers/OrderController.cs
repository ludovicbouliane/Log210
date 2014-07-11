using System;
using System.Web.Http;
using Domain.Services.Interfaces;
using Model.ControllerModel;
using Model.DomainModel;

namespace Controller.Controllers
{
    [RoutePrefix("api/orders")]
    public class OrderController : WebApiController
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            if (orderService == null) throw new ArgumentNullException("orderService");
            _orderService = orderService;
        }

        [HttpPut]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult Create([FromBody] InsertOrderWithDishes insertOrder)
        {
            var response = _orderService.Create(insertOrder);
            return ResponseMessage(response);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("status")]
        public IHttpActionResult Update([FromBody]OrderStatus orderStatus)
        {
            var response = _orderService.UpdateStatus(orderStatus);
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult GetAll()
        {
            var response = _orderService.GetAll();
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("status/{restaurantId}")]
        public IHttpActionResult GetAllOrderStatusByRestaurantId(string restaurantId)
        {
            var response = _orderService.GetAllOrderStatusByRestaurantId(restaurantId);
            return ResponseMessage(response);
        }
    }
}
