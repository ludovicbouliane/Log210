using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.DomainModel;

namespace Model.ControllerModel
{
    public class InsertOrderWithDishes
    {
        public string Username { get; set; }
        public string RestaurantId { get; set; }
        public string MenuId { get; set; }
        public List<OrderDish> Dishes { get; set; }
        public Address Address { get; set; }
        public string DeliveryTime { get; set; }
    }
}
