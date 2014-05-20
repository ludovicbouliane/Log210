using System.Web.Http.Controllers;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;

namespace WebService.CompositionRoot.Installers
{
    public class ApiControllerInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            // Register Web Api Controllers
            container.Register(Classes.FromAssemblyNamed("Controller")
                                      .BasedOn<IHttpController>()
                                      .LifestylePerWebRequest());
                                      //.Configure(x => x.Named(x.Implementation.FullName)));
        }
    }
}
