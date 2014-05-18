using DataAccess.Repositories.Interfaces;
using Model;
using MongoDB.Driver;

namespace DataAccess.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(MongoClient mongoClient)
            : base(mongoClient)
        {

        }
    }
}