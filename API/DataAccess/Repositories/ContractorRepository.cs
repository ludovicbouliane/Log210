using DataAccess.Repositories.Interfaces;
using Model;
using MongoDB.Driver;

namespace DataAccess.Repositories
{
    public class ContractorRepository : Repository<Contractor>, IContractorRepository
    {
        public ContractorRepository(MongoClient mongoClient)
            : base(mongoClient)
        {

        }
    }
}