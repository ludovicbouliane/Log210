using Model.DomainModel;
using System.Collections.Generic;

namespace Model.ControllerModel
{
    public class MenuUpdateWithDishes
    {
        public string MenuId { get; set; }
        public string Name { get; set; }
        public List<Dish> Dishes { get; set; }
    }
}
