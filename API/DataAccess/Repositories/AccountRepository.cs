using DataAccess.Repositories.Interfaces;
using Model.DomainModel;

namespace DataAccess.Repositories
{
    public class AccountRepository : Repository<Account>, IAccountRepository
    {
    }
}
