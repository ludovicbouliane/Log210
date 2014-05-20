using System;
using System.Web.Http;
using Domain.Services.Interfaces;
using Model;
using Model.ControllerModel;
using Model.DomainModel;

namespace Controller.Controllers
{
    [RoutePrefix("api/restaurantManagers")]
    public class RestaurantManagerController : WebApiController
    {
        private readonly IRestaurantManagerService _restaurantManagerService;

        public RestaurantManagerController(IRestaurantManagerService restaurantManagerService)
        {
            if (restaurantManagerService == null) throw new ArgumentNullException("restaurantManagerService");
            _restaurantManagerService = restaurantManagerService;
        }

        [HttpPut]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult Create([FromBody]RestaurantManagerWithAccount restaurantManagerWithAccount)
        {
            var response = _restaurantManagerService.Create(restaurantManagerWithAccount);
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult GetAll()
        {
            var response = _restaurantManagerService.GetAll();
            return ResponseMessage(response);
        }
    }
}
