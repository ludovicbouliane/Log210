using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using DataAccess.Repositories;

namespace WebService.Installers
{
    public class RepositoryInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            // Register All Repositories
            container.Register(Classes.FromAssemblyContaining<UserRepository>()
                                      .InSameNamespaceAs<UserRepository>()
                                      .WithServiceDefaultInterfaces()
                                      .LifestylePerWebRequest());
        }
    }
}