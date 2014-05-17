using System;
using System.IO;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Newtonsoft.Json;
using WebService.App_Start;

namespace WebService
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            this.Error += WebApiApplication_Error;
        }

        private static void WebApiApplication_Error(object sender, EventArgs e)
        {
            const string path = @"C:\ApplicationLog.txt";
            File.WriteAllText(path, "");
            File.AppendAllText(path, JsonConvert.SerializeObject(sender));
            File.AppendAllText(path, Environment.NewLine);
            File.AppendAllText(path, JsonConvert.SerializeObject(e));
        }
    }
}
