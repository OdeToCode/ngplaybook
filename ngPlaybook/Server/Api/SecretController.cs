using System.Collections.Generic;
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
                Id = 1, 
                Title = "Foo",
                Instructions = "Bar",
                Ingredients = new List<Ingredient>
                {
                  new Ingredient { Id = 1, Name="Choclate", Quantity="2 oz."},
                }
            });
        }
    }
}
