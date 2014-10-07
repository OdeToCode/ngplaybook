using System;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;

namespace NgPlaybook.Server.Auth
{
    public class OdeToFoodOAuthOptions : OAuthAuthorizationServerOptions
    {
        public OdeToFoodOAuthOptions()
        {
            TokenEndpointPath = new PathString("/login");
            AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(1);
            #if DEBUG
                AllowInsecureHttp = true;
            #endif
        }
    }
}