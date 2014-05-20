using System.Net;

namespace Domain.Response
{
    public interface IResponse
    {
        object Content { get; }
        HttpStatusCode HttpStatusCode { get; }

        void Set(HttpStatusCode httpStatusCode, object content);
        void Set(HttpStatusCode httpStatusCode);
    }
}