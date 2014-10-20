using System;
using System.IdentityModel.Tokens;
using Microsoft.Owin.Security;
using NgPlaybook.Server.Config;

namespace NgPlaybook.Server.Auth
{
    public class OdeToFoodJwtWriterFormat : ISecureDataFormat<AuthenticationTicket>
    {
        public string SignatureAlgorithm
        {
            get { return "http://www.w3.org/2001/04/xmldsig-more#hmac-sha256"; }
        }

        public string DigestAlgorithm
        {
            get { return "http://www.w3.org/2001/04/xmlenc#sha256"; }
        }

        public string Protect(AuthenticationTicket data)
        {
            if (data == null) throw new ArgumentNullException("data");

            var config = AppConfiguration.Config;
            var issuer = config.JwtIssuer;
            var audience = config.JwtAudience;
            var key = Convert.FromBase64String(config.JwtKey);
            var now = DateTime.UtcNow;
            var expires = DateTime.UtcNow.AddMinutes(120);
            var signingCredentials = new SigningCredentials(new InMemorySymmetricSecurityKey(key), SignatureAlgorithm,
                DigestAlgorithm);
            var token = new JwtSecurityToken(issuer, audience, data.Identity.Claims, now, expires, signingCredentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public AuthenticationTicket Unprotect(string protectedText)
        {
            throw new NotImplementedException();
        }
    }
}