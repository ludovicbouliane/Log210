using DataAccess.Repositories.Interfaces;
using Model.DomainModel;

namespace DataAccess.Repositories
{
    public class RestaurantRepository : Repository<Restaurant>, IRestaurantRepository
    {
        public override void Save(params Restaurant[] items)
        {
            foreach (var restaurant in items)
            {
                var collection = _database.GetCollection<Restaurant>(typeof(Restaurant).Name.ToLower() + "s");

                var existingRestaurant = GetSingle(c => c.Id == restaurant.Id);

                if (restaurant.Address.Street != null) existingRestaurant.Address.Street = restaurant.Address.Street;
                if (restaurant.Address.City != null) existingRestaurant.Address.City = restaurant.Address.City;
                if (restaurant.Address.State != null) existingRestaurant.Address.State = restaurant.Address.State;
                if (restaurant.Address.Country != null) existingRestaurant.Address.Country = restaurant.Address.Country;
                if (restaurant.Address.ZipCode != null) existingRestaurant.Address.ZipCode = restaurant.Address.ZipCode;
                if (restaurant.Name != null) existingRestaurant.Name = restaurant.Name;
                if (restaurant.Telephone != null) existingRestaurant.Telephone = restaurant.Telephone;
                if (restaurant.RestaurantManagerId != null) existingRestaurant.RestaurantManagerId = restaurant.RestaurantManagerId;
                if (restaurant.ContractorId != null) existingRestaurant.ContractorId = restaurant.ContractorId;

                collection.Save(existingRestaurant);
            }
        }
    }
}