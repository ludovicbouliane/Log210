using Domain.Response;
using Model.ControllerModel;
using Model.DomainModel;

namespace Domain.Services.Interfaces
{
    public interface IAccountService
    {
        IResponse Authentificate(Account account);
        IResponse UpdatePassword(PasswordUpdate passwordUpdate);
        bool IsUsernameAlreadyTaken(string username);
        void CreateAccount(Account account);
    }
}