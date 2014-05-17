using System.Net;

namespace Domain
{
    public class Response : IResponse
    {
        public object Content { get; private set; }
        public HttpStatusCode HttpStatusCode { get; private set; }

        public void Set(HttpStatusCode httpStatusCode, object content)
        {
            HttpStatusCode = httpStatusCode;
            Content = content;
        }

        public void Set(HttpStatusCode httpStatusCode)
        {
            Set(httpStatusCode, null);
        }
    }
}