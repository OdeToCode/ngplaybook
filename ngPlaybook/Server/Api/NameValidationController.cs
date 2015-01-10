using System.Threading;
using System.Web.Http;

namespace NgPlaybook.Server.Api
{
    public class NameValidationController : ApiController
    {
        public IHttpActionResult Get(string name)
        {
            Thread.Sleep(2000);
            if (name.Length > 3)
            {
                return Ok(true);
            }
            return Ok(false);
        }
    }
}
