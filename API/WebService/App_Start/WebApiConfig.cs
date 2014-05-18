using System.Web.Http;
using System.Web.Http.Cors;
using WebService.Initializers;

namespace WebService.App_Start
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            // Add Authorize attribute to all Actions (White List Mode)
            config.Filters.Add(new AuthorizeAttribute());

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
