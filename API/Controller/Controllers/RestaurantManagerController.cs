﻿using System;
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

        [HttpGet]
        [AllowAnonymous]
        [Route("{username}")]
        public IHttpActionResult GetRestaurantManagerByUsername(string username)
        {
            var response = _restaurantManagerService.GetRestaurantManagerByUsername(username);
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("contractors/{contractorUsername}")]
        public IHttpActionResult GetRestaurantManagerByContractorUsername(string contractorUsername)
        {
            var response = _restaurantManagerService.GetRestaurantManagerByContractorUsername(contractorUsername);
            return ResponseMessage(response);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult Update([FromBody]RestaurantManager restaurantManager)
        {
            var response = _restaurantManagerService.Update(restaurantManager);
            return ResponseMessage(response);
        }

        [HttpDelete]
        [AllowAnonymous]
        [Route("{username}")]
        public IHttpActionResult Delete(string username)
        {
            var response = _restaurantManagerService.Delete(username);
            return ResponseMessage(response);
        }

        [HttpDelete]
        [AllowAnonymous]
        [Route("restaurants/{restaurantId}")]
        public IHttpActionResult DeleteRestaurant(string restaurantId)
        {
            var response = _restaurantManagerService.DeleteRestaurant(restaurantId);
            return ResponseMessage(response);
        }
    }
}
