using DataAccess.Repositories.Interfaces;
using Model.DomainModel;

namespace DataAccess.Repositories
{
    public class RestaurantManagerRepository : Repository<RestaurantManager>, IRestaurantManagerRepository
    {
        public override void Save(params RestaurantManager[] items)
        {
            foreach (var restaurantManager in items)
            {
                var collection = _database.GetCollection<RestaurantManager>(typeof(RestaurantManager).Name.ToLower() + "s");

                var existingRestaurantManager = GetSingle(r => r.Username == restaurantManager.Username);

                if (restaurantManager.FirstName != null) existingRestaurantManager.FirstName = restaurantManager.FirstName;
                if (restaurantManager.LastName != null) existingRestaurantManager.LastName = restaurantManager.LastName;
                if (restaurantManager.RestaurantIds != null) existingRestaurantManager.RestaurantIds = restaurantManager.RestaurantIds;

                collection.Save(existingRestaurantManager);
            }
        }
    }
}