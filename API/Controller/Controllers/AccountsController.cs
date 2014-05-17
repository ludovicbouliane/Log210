using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Security;

namespace Controller.Controllers
{
    [RoutePrefix("api/accounts")]
    public class AccountsController : ApiController
    {
        [AllowAnonymous]
        [HttpPost]
        [Route("login")]
        public IHttpActionResult Login([FromBody]UserCredentials credentials)
        {
            if (credentials == null)
            {
                return BadRequest("Invalid Credentials");
            }
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Values.Where(v => v.Errors.Any()).SelectMany(v => v.Errors).ToList();
                if (errors.Any())
                {
                    var message = errors.Aggregate(String.Empty, (cur, next) => cur + next.ErrorMessage + "\r\n");
                    return BadRequest(message);
                }
            }
            if (AuthenticationService.Authenticate(credentials.Username, credentials.Password))
            {
                FormsAuthentication.SetAuthCookie(credentials.Username, true);
                return StatusCode(HttpStatusCode.Accepted);
            }
            return BadRequest("Invalid Username or Password");
        }
    }

    public static class AuthenticationService
    {
        public static bool Authenticate(string username, string password)
        {
            return username == "kaven" && password == "test123";
        }
    }

    public class UserCredentials
    {
        [StringLength(50, ErrorMessage = "Username is invalid", MinimumLength = 5)]
        public String Username { get; set; }
        [StringLength(50, ErrorMessage = "Password is invalid", MinimumLength = 5)]
        public String Password { get; set; }
    }
}
