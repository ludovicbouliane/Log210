using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using DataAccess.Database;
using DataAccess.Models;

namespace WebService.Installers
{
    public class EntityInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            // Register Entity Context
            container.Register(Component.For<Entities>()
                                        .ImplementedBy<Entities>()
                                        .LifestylePerWebRequest());

            // Register Entity Models
            container.Register(Classes.FromAssemblyContaining<User>()
                                      .InSameNamespaceAs<User>()
                                      .WithServiceDefaultInterfaces()
                                      .LifestylePerWebRequest());
        }
    }
}
