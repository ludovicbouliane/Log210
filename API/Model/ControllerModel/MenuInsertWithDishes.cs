using Model.DomainModel;
using System.Collections.Generic;

namespace Model.ControllerModel
{
    public class MenuInsertWithDishes
    {
        public string RestaurantId { get; set; }
        public string Name { get; set; }
        public List<Dish> Dishes { get; set; }
    }
}
