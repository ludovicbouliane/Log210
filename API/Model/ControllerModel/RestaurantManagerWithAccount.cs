using Model.DomainModel;

namespace Model.ControllerModel
{
    public class RestaurantManagerWithAccount
    {
        public string Id { get; set; }
        public Account Account { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}