using Model;

namespace Domain.Services.Interfaces
{
    public interface IAccountService
    {
        IResponse Authentificate(Account account);
        IResponse UpdatePassword(Account account);
        bool IsUsernameAlreadyTaken(string username);
    }
}