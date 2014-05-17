using System.Web.Http;
using System.Web.Http.Dispatcher;
using Castle.Windsor;
using Castle.Windsor.Installer;
using WebService.App_Start;
using WebService.CompositionRoot;

namespace WebService.Initializers
{
    public class WindsorInitializer : IApplicationInitializer
    {
        public void Initialize(HttpConfiguration config)
        {
            var windsorContainer = new WindsorContainer().Install(FromAssembly.This());
            config.Services.Replace(typeof(IHttpControllerActivator), new WindsorCompositionRoot(windsorContainer));
        }
    }
}