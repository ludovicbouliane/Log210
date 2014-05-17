using DataAccess.Repositories.Interfaces;
using Domain.DomainObjects;
using MongoDB.Driver;

namespace DataAccess.Repositories
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        private readonly MongoClient _mongoClient;

        public ClientRepository(MongoClient mongoClient)
            : base(mongoClient)
        {
            _mongoClient = mongoClient;
        }
    }
}
