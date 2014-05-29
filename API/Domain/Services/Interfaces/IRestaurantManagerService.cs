using Domain.Response;
using Model.ControllerModel;
using Model.DomainModel;

namespace Domain.Services.Interfaces
{
    public interface IRestaurantManagerService
    {
        IResponse GetAll();
        IResponse Create(RestaurantManagerWithAccount restaurantManagerWithAccount);
        IResponse Update(RestaurantManager restaurantManager);
        IResponse Delete(string restaurantManagerId);
        IResponse GetRestaurantManagerById(string restaurantManagerId);
        IResponse GetAllRestaurantManagerName();
    }
}