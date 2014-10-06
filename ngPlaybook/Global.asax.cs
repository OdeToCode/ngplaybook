using System;
using System.Web;
using System.Web.Http;
using NgPlaybook.Server.Startup;

namespace NgPlaybook
{
    public class Global : HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            GlobalConfiguration.Configure(WebApiStartup.Configure);
        }
    }
}