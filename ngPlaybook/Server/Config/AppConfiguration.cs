using System.Configuration;

namespace NgPlaybook.Server.Config
{
    public class AppConfiguration : ConfigurationSection
    {
        [ConfigurationProperty("tokenPath", IsRequired = true)]
        public string TokenPath
        {
            get { return (string)this["tokenPath"]; }
            set { this["tokenPath"] = value; }
        }

        [ConfigurationProperty("expirationMinutes", IsRequired = true)]
        public int ExpirationMinutes
        {
            get { return (int)this["expirationMinutes"]; }
            set { this["expirationMinutes"] = value; }
        }

        [ConfigurationProperty("jwtKey")]
        public string JwtKey
        {
            get { return (string)this["jwtKey"]; }
            set { this["jwtKey"] = value; }
        }

        [ConfigurationProperty("jwtIssuer")]
        public string JwtIssuer
        {
            get { return (string)this["jwtIssuer"]; }
            set { this["jwtIssuer"] = value; }
        }

        [ConfigurationProperty("jwtAudience")]
        public string JwtAudience
        {
            get { return (string)this["jwtAudience"]; }
            set { this["jwtAudience"] = value; }
        }

        public static AppConfiguration Config
        {
            get { return ConfigurationManager.GetSection("appConfiguration") as AppConfiguration; }
        }
    }
}