using System;
using Microsoft.Owin.Security.Jwt;

namespace NgPlaybook.Server.Auth
{
    public class OdeToFoodJwtOptions : JwtBearerAuthenticationOptions
    {
        public OdeToFoodJwtOptions()
        {
            var host = "http://localhost:17648";
            AllowedAudiences = new[] { host };
            IssuerSecurityTokenProviders = new[]
            {
                new SymmetricKeyIssuerSecurityTokenProvider(host,
                    Convert.FromBase64String("UHxNtYMRYwvfpO1dS4pWLKL0M3DgOj30EbN4SoBWgfc="))
            };
        }
    }
}