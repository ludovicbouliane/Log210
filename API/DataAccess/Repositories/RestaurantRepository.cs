using DataAccess.Repositories.Interfaces;
using Model;

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

                if (restaurant.Adress != null) existingRestaurant.Adress = restaurant.Adress;
                if (restaurant.City != null) existingRestaurant.City = restaurant.City;
                if (restaurant.Province != null) existingRestaurant.Province = restaurant.Province;
                if (restaurant.Country != null) existingRestaurant.Country = restaurant.Country;
                if (restaurant.PostalCode != null) existingRestaurant.PostalCode = restaurant.PostalCode;
                if (restaurant.Name != null) existingRestaurant.Name = restaurant.Name;
                if (restaurant.Telephone != null) existingRestaurant.Telephone = restaurant.Telephone;
                if (restaurant.RestaurantManagerId != null) existingRestaurant.RestaurantManagerId = restaurant.RestaurantManagerId;

                collection.Save(existingRestaurant);
            }
        }
    }
}