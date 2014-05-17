using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Domain.Models;

namespace WebService.Installers
{
    public class ModelInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            // Register Domain Models
            container.Register(Classes.FromAssemblyContaining<UserModel>()
                                      .InSameNamespaceAs<UserModel>()
                                      .WithServiceDefaultInterfaces()
                                      .LifestylePerWebRequest());
        }
    }
}