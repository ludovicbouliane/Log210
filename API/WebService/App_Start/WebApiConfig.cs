using System.Linq;
using System.Web.Http;
using WebService.Initializers;
using WebService.MessageHandlers;

namespace WebService.App_Start
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Add Authorize attribute to all Actions (White List Mode)
            config.Filters.Add(new AuthorizeAttribute());

            config.MessageHandlers.Add(new LoggingMessageHandler());
            config.MessageHandlers.Add(new AuthorizationMessageHandler());
            config.MessageHandlers.Add(new CultureMessageHandler());
            
            config.Initialize(new WindsorInitializer());
            config.Initialize(new AutoMapperInitializer());

            config.Filters.Add(new ModelStateValidator());

            config.MapHttpAttributeRoutes();
        }

        private static void Initialize(this HttpConfiguration config, params IApplicationInitializer[] initializers)
        {
            foreach (var applicationInitializer in initializers)
            {
                applicationInitializer.Initialize(config);
            }
        }
    }
}
