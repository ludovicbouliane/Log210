using System;
using System.Web.Http;
using Domain.Services.Interfaces;
using Model;

namespace Controller.Controllers
{
    [RoutePrefix("api/accounts")]
    public class AccountController : WebApiController
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            if (accountService == null) throw new ArgumentNullException("accountService");
            _accountService = accountService;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public IHttpActionResult Authentificate([FromBody]Account account)
        {
            var response = _accountService.Authentificate(account);
            return ResponseMessage(response);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("password")]
        public IHttpActionResult UpdatePassword([FromBody]Account account)
        {
            var response = _accountService.UpdatePassword(account);
            return ResponseMessage(response);
        }
    }
}
