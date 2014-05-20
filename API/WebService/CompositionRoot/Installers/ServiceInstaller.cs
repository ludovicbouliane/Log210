using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Domain.Services;

namespace WebService.CompositionRoot.Installers
{
    public class ServiceInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            // Register All Services
            container.Register(Classes.FromAssemblyContaining<ClientService>()
                                      .InSameNamespaceAs<ClientService>()
                                      .WithServiceDefaultInterfaces()
                                      .LifestylePerWebRequest());
        }
    }
}