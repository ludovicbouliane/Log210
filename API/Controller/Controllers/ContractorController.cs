using System;
using System.Web.Http;
using Domain.Services.Interfaces;
using Model;
using Model.ControllerModel;
using Model.DomainModel;

namespace Controller.Controllers
{
    [RoutePrefix("api/contractors")]
    public class ContractorController : WebApiController
    {
        private readonly IContractorService _contractorService;

        public ContractorController(IContractorService contractorService)
        {
            if (contractorService == null) throw new ArgumentNullException("contractorService");
            _contractorService = contractorService;
        }

        [HttpPut]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult Create([FromBody]ContractorWithAccount contractorWithAccount)
        {
            var response = _contractorService.Create(contractorWithAccount);
            return ResponseMessage(response);
        }
    }
}
