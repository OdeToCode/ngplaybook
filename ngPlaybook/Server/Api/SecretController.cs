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
                Title = "French Toast",
                Instructions = @"In a medium bowl, whisk together the eggs, milk, and cinnamon. 
Stir in the orange zest and/or Triple Sec if using. Whisk the mixture until well blended 
and pour into a shallow bowl, wide enough to place a slice of the bread you will be using. 
Melt some butter in a large skillet over medium high heat. Place each slice of bread into 
the milk egg mixture, allowing the bread to soak in some of it. Shake off the excess, 
and place the bread slices onto the hot skillet. Fry the French toast until browned on 
one side, then flip and brown the other side. Serve hot with butter, maple syrup, and if 
available, fresh berries.",
                Ingredients = new List<Ingredient>
                {
                  new Ingredient { Id = 1, Name="Eggs", Quantity="4"},
                  new Ingredient { Id = 2, Name="Milk", Quantity="2/3 Cup"},
                  new Ingredient { Id = 3, Name="Cinnamon", Quantity="2 teaspoons"},
                  new Ingredient { Id = 4, Name="Day Old Bread", Quantity="8 thick slices"}
                }
            });
        }
    }
}
