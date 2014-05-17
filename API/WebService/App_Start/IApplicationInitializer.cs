using System.Web.Http;

namespace WebService.App_Start
{
    public interface IApplicationInitializer
    {
        void Initialize(HttpConfiguration config);
    }
}
