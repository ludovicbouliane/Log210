using Domain.Response;
using Model;
using Model.ControllerModel;
using Model.DomainModel;

namespace Domain.Services.Interfaces
{
    public interface IAccountService
    {
        IResponse Authentificate(Account account);
        IResponse UpdatePassword(PasswordUpdate passwordUpdate);
        bool IsUsernameAlreadyTaken(string username);
        string CreateAccount(Account account);
        IResponse GetUsernameByAccountId(string accountId);
    }
}