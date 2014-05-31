using System.Collections.Generic;
using Model.DomainModel;

namespace Model.ControllerModel
{
    public class RestaurantManagerWithRestaurants
    {
        public string Username { get; set; }
        public List<Restaurant> Restaurants { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}