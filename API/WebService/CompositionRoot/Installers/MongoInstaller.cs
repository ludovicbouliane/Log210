using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using MongoDB.Driver;

namespace WebService.CompositionRoot.Installers
{
    public class MongoInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Component.For<MongoClient>()
                                        .ImplementedBy<MongoClient>()
                                        .LifestylePerWebRequest());
        }
    }
}
