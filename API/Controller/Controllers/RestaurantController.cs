using System;
using System.Web.Http;
using Domain.Services.Interfaces;
using Model.DomainModel;

namespace Controller.Controllers
{
    [RoutePrefix("api/restaurants")]
    public class RestaurantController : WebApiController
    {
        private readonly IRestaurantService _restaurantService;

        public RestaurantController(IRestaurantService restaurantService)
        {
            if (restaurantService == null) throw new ArgumentNullException("restaurantService");
            _restaurantService = restaurantService;
        }

        [HttpPut]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult Create([FromBody]Restaurant restaurant)
        {
            var response = _restaurantService.Create(restaurant);
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("{restaurantManagerUsername}")]
        public IHttpActionResult GetRestaurantById(string restaurantId)
        {
            var response = _restaurantService.GetRestaurantById(restaurantId);
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("contractors/{contractorUsername}")]
        public IHttpActionResult GetRestaurantByContractorUsername(string contractorUsername)
        {
            var response = _restaurantService.GetRestaurantByContractorUsername(contractorUsername);
            return ResponseMessage(response);
        }

        //[HttpGet]
        //[AllowAnonymous]
        //[Route("restaurantManagers/{restaurantManagerUsername}")]
        //public IHttpActionResult GetRestaurantByRestaurantManagerUsername(string restaurantManagerUsername)
        //{
        //    var response = _restaurantService.GetRestaurantByRestaurantManagerUsername(restaurantManagerUsername);
        //    return ResponseMessage(response);
        //}

        [HttpGet]
        [AllowAnonymous]
        [Route("name")]
        public IHttpActionResult GetAllRestaurantName()
        {
            var response = _restaurantService.GetAllRestaurantName();
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult GetAllRestaurant()
        {
            var response = _restaurantService.GetAllRestaurant();
            return ResponseMessage(response);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult Update([FromBody]Restaurant restaurant)
        {
            var response = _restaurantService.Update(restaurant);
            return ResponseMessage(response);
        }

        [HttpDelete]
        [AllowAnonymous]
        [Route("{restaurantManagerUsername}")]
        public IHttpActionResult Delete(string restaurantId)
        {
            var response = _restaurantService.Delete(restaurantId);
            return ResponseMessage(response);
        }
    }
}
