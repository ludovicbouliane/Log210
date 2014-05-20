using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using Domain;
using Domain.Response;

namespace Controller.Controllers
{
    public abstract class WebApiController : ApiController
    {
        protected readonly MediaTypeFormatter ResponseFormatter = new JsonMediaTypeFormatter();

        protected IHttpActionResult ResponseMessage(IResponse response)
        {
            var message = new HttpResponseMessage(response.HttpStatusCode);

            if (response.Content != null)
            {
                if (response.Content is string)
                {
                    message.Content = new StringContent(response.Content.ToString());
                }
                else
                {
                    message.Content = new ObjectContent(response.Content.GetType(), response.Content, ResponseFormatter);
                }
            }

            return base.ResponseMessage(message);
        }
    }
}
