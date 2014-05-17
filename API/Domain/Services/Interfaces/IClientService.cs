using Domain.DomainObjects;

namespace Domain.Services.Interfaces
{
    public interface IClientService
    {
        IResponse Authentificate(Account clientAccount);
        IResponse Create(Client client);
        IResponse GetAll();
    }
}