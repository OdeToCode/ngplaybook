using System;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using NgPlaybook.Server.Config;

namespace NgPlaybook.Server.Auth
{
    public class OdeToFoodOAuthOptions : OAuthAuthorizationServerOptions
    {
        public OdeToFoodOAuthOptions()
        {
            var config = AppConfiguration.Config;

            TokenEndpointPath = new PathString(config.TokenPath);
            AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(config.ExpirationMinutes);
            AccessTokenFormat = new OdeToFoodJwtWriterFormat();
            Provider = new OdeToFoodOAuthProvider();
            #if DEBUG
                AllowInsecureHttp = true;
            #endif
        }
    }
}