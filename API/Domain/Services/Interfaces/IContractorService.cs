using Domain.Response;
using Model.ControllerModel;

namespace Domain.Services.Interfaces
{
    public interface IContractorService
    {
        IResponse Create(ContractorWithAccount contractor);
    }
}