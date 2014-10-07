using Microsoft.Owin;
using NgPlaybook.Server.Auth;
using NgPlaybook.Server.Startup;
using Owin;

[assembly: OwinStartup(typeof(OwinStartup))]
namespace NgPlaybook.Server.Startup
{
   
    public class OwinStartup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseOAuthAuthorizationServer(new OdeToFoodOAuthOptions());            
            app.UseJwtBearerAuthentication(new OdeToFoodJwtOptions());
        }
    }
}