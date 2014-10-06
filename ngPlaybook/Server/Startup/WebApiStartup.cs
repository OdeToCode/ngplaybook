using System.Web.Http;

namespace NgPlaybook.Server.Startup
{
    public class WebApiStartup
    {
        public static void Configure(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute("api", "api/{controller}");
        }
    }
}