using Model;

namespace Domain.Services.Interfaces
{
    public interface IAccountService
    {
        IResponse Authentificate(Account account);
    }
}