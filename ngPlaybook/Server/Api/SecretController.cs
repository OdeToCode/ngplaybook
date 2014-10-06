using System.Web.Http;
using NgPlaybook.Server.Models;

namespace NgPlaybook.Server.Api
{
    [Authorize]
    public class SecretController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(new Recipe
            {

            });
        }
    }
}
