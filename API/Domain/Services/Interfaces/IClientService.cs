using Model;

namespace Domain.Services.Interfaces
{
    public interface IClientService
    {
        IResponse Create(Client client);
        IResponse Update(Client client);
        IResponse GetAll();
    }
}