using Domain.Response;
using Model.ControllerModel;

namespace Domain.Services.Interfaces
{
    public interface IOrderService
    {
        IResponse Create(InsertOrderWithDishes insertOrder);
        IResponse GetAll();
        IResponse UpdateStatus(OrderStatus orderStatus);
        IResponse GetAllOrderStatusByRestaurantId(string restaurantId);
        IResponse GetAllPendingOrder();
        IResponse GetAllPendingOrderByRestaurantId(string restaurantId);
    }
}