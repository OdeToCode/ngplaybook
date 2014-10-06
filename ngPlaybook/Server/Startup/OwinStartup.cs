using System;
using Microsoft.Owin;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.Security.OAuth;
using NgPlaybook.Server.Startup;
using Owin;

[assembly: OwinStartup(typeof(OwinStartup))]
namespace NgPlaybook.Server.Startup
{
   
    public class OwinStartup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseOAuthAuthorizationServer(new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/login"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(1),
                #if DEBUG
                    AllowInsecureHttp = true
                #endif
            });

            app.UseJwtBearerAuthentication(new JwtBearerAuthenticationOptions());
        }
    }
}