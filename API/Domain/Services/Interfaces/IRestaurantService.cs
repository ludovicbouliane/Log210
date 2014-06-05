using System.Collections.Generic;
using Domain.Response;
using Model.DomainModel;

namespace Domain.Services.Interfaces
{
    public interface IRestaurantService
    {
        IResponse Create(Restaurant restaurant);
        IResponse Update(Restaurant restaurant);
        void Delete(string restaurantId);
        IResponse GetRestaurantById(string restaurantId);
        IResponse GetAllRestaurantName();
        IResponse GetAllRestaurant();
        IResponse GetRestaurantByContractorUsername(string contractorUsername);
        List<Restaurant> GetAllRestaurantsByRestaurantIds(IEnumerable<string> ids);
    }
}