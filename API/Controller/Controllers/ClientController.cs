﻿using System;
using System.Web.Http;
using Domain.Services.Interfaces;
using Model;

namespace Controller.Controllers
{
    [RoutePrefix("api/clients")]
    public class ClientController : WebApiController
    {
        private readonly IClientService _clientService;

        public ClientController(IClientService clientService)
        {
            if (clientService == null) throw new ArgumentNullException("clientService");
            _clientService = clientService;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult GetAll()
        {
            var response = _clientService.GetAll();
            return ResponseMessage(response);
        }

        [HttpPut]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult Create([FromBody]Client client)
        {
            var response = _clientService.Create(client);
            return ResponseMessage(response);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult Update([FromBody]Client user)
        {
            var response = _clientService.Update(user);
            return ResponseMessage(response);
        }
    }
}