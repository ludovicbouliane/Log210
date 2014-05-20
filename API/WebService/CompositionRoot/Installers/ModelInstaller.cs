using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Model.DomainModel;

namespace WebService.CompositionRoot.Installers
{
    public class ModelInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            // Register Domain Models
            container.Register(Classes.FromAssemblyContaining<Client>()
                                      .InSameNamespaceAs<Client>()
                                      .WithServiceDefaultInterfaces()
                                      .LifestylePerWebRequest());
        }
    }
}