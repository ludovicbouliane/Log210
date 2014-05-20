using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using DataAccess.Repositories;

namespace WebService.CompositionRoot.Installers
{
    public class RepositoryInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            // Register All Repositories
            container.Register(Classes.FromAssemblyContaining<ClientRepository>()
                                      .InSameNamespaceAs<ClientRepository>()
                                      .WithServiceDefaultInterfaces()
                                      .LifestylePerWebRequest());
        }
    }
}