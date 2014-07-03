using Domain.Response;
using Model.ControllerModel;
using Model.DomainModel;

namespace Domain.Services.Interfaces
{
    public interface IOrderService
    {
        IResponse Create(Order order);
        IResponse GetAll();
        IResponse UpdateStatus(OrderStatus orderStatus);
        IResponse GetAllOrderStatusByRestaurantId(string restaurantId);
    }
}