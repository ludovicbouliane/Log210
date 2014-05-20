using Domain.Response;
using Model.ControllerModel;

namespace Domain.Services.Interfaces
{
    public interface IRestaurantManagerService
    {
        IResponse GetAll();
        IResponse Create(RestaurantManagerWithAccount restaurantManagerWithAccount);
    }
}