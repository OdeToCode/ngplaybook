using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace NgPlaybook.Server.Startup
{
    public class WebApiStartup
    {
        public static void Configure(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute("api", "api/{controller}");
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}