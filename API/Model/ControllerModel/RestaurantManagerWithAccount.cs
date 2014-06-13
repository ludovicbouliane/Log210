using System.Collections.Generic;
using Model.DomainModel;

namespace Model.ControllerModel
{
    public class RestaurantManagerWithAccount
    {
        public Account Account { get; set; }
        public string ContractorUsername { get; set; }
        public List<string> RestaurantIds { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}