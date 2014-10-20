using System.Collections.Generic;

namespace NgPlaybook.Server.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public IList<Ingredient> Ingredients { get; set; }
        public string Instructions { get; set; }
    }

    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Quantity { get; set; }
    }
}