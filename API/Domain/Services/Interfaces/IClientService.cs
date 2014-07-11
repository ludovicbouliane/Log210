using Domain.Response;
using Model;
using Model.ControllerModel;
using Model.DomainModel;

namespace Domain.Services.Interfaces
{
    public interface IClientService
    {
        IResponse Create(ClientWithAccount client);
        IResponse Update(Client client);
        IResponse GetAll();
        IResponse GetClientByUsername(string username);
        IResponse AddPredefinedAddress(ClientPredefinedAddress clientPredefinedAddress);
        IResponse GetAllPredefinedAddress(string username);
        IResponse GetAddressDetail(string AddressId);
    }
}