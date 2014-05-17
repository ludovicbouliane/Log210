using System.Collections.Generic;
using System.Net;

namespace Domain
{
    public interface IResponse
    {
        object Content { get; }
        HttpStatusCode HttpStatusCode { get; }

        void Set(HttpStatusCode httpStatusCode, object content);
        void Set(HttpStatusCode httpStatusCode);
    }
}