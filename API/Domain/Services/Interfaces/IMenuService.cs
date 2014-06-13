using System.Collections.Generic;
using Domain.Response;
using Model.DomainModel;
using Model.ControllerModel;

namespace Domain.Services.Interfaces
{
    public interface IMenuService
    {
        IResponse GetMenuByRestaurantId(string RestaurantId);
        IResponse GetDishByMenuId(string MenuId);
        IResponse AddMenu(MenuInsertWithDishes menuInsertWithDishes);
        IResponse EditMenu(MenuUpdateWithDishes menuUpdateWithDishes);
    }
}
