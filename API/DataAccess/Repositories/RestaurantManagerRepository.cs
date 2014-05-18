using DataAccess.Repositories.Interfaces;
using Model;
using MongoDB.Driver;

namespace DataAccess.Repositories
{
    public class RestaurantManagerRepository : Repository<RestaurantManager>, IRestaurantManagerRepository
    {
        public RestaurantManagerRepository(MongoClient mongoClient)
            : base(mongoClient)
        {

        }
    }
}