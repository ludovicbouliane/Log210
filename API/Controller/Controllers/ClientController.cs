using System;
using System.Web.Http;
using Domain.DomainObjects;
using Domain.Services.Interfaces;

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

        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public IHttpActionResult Authentificate([FromBody]Account clientAccount)
        {
            var response = _clientService.Authentificate(clientAccount);
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
    }
}
