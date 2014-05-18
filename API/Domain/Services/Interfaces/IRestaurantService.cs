using Model;

namespace Domain.Services.Interfaces
{
    public interface IRestaurantService
    {
        IResponse Create(Restaurant restaurant);
        IResponse Update(Restaurant restaurant);
        IResponse Delete(string restaurantId);
    }
}