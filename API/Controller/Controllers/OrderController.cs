using System;
using System.Web.Http;
using Domain.Services.Interfaces;
using Model.ControllerModel;

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

        [HttpPost]
        [AllowAnonymous]
        [Route("status")]
        public IHttpActionResult Update([FromBody]OrderStatus orderStatus)
        {
            var response = _orderService.UpdateStatus(orderStatus);
            return ResponseMessage(response);
        }
    }
}
