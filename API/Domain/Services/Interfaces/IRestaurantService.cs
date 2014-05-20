using Domain.Response;
using Model;
using Model.DomainModel;

namespace Domain.Services.Interfaces
{
    public interface IRestaurantService
    {
        IResponse Create(Restaurant restaurant);
        IResponse Update(Restaurant restaurant);
        IResponse Delete(string restaurantId);
        IResponse GetRestaurantById(string restaurantId);
        IResponse GetAll();
    }
}