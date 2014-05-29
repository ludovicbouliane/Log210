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

                var existingRestaurantManager = GetSingle(r => r.Id == restaurantManager.Id);

                if (restaurantManager.FirstName != null) existingRestaurantManager.FirstName = restaurantManager.FirstName;
                if (restaurantManager.LastName != null) existingRestaurantManager.LastName = restaurantManager.LastName;

                collection.Save(existingRestaurantManager);
            }
        }
    }
}