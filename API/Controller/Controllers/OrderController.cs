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

        [HttpPost]
        [AllowAnonymous]
        [Route("delivery")]
        public IHttpActionResult UpdateDeliveryManUsername([FromBody]OrderDelivery orderDelivery)
        {
            var response = _orderService.UpdateDeliveryManUsername(orderDelivery);
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
        [Route("pending")]
        public IHttpActionResult GetAllPendingOrder()
        {
            var response = _orderService.GetAllPendingOrder();
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("pending/orderinfo")]
        public IHttpActionResult GetAllPendingOrderWithOrderInfo()
        {
            var response = _orderService.GetAllPendingOrdersWithOrderInfo();
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("pending/orderinfo/{username}")]
        public IHttpActionResult GetAllPendingOrderWithOrderInfoByDeliveryManUsername(string username)
        {
            var response = _orderService.GetAllPendingOrderWithOrderInfoByDeliveryManUsername(username);
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("pending/{restaurantId}")]
        public IHttpActionResult GetAllPendingOrderByRestaurantId(string restaurantId)
        {
            var response = _orderService.GetAllPendingOrderByRestaurantId(restaurantId);
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
