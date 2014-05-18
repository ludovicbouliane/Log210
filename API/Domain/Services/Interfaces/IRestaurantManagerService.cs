using Model;

namespace Domain.Services.Interfaces
{
    public interface IRestaurantManagerService
    {
        IResponse GetAll();
        IResponse Create(RestaurantManager restaurantManager);
    }
}