using System;
using System.Web.Http;
using Domain.Services.Interfaces;
using Model.DomainModel;
using Model.ControllerModel;

namespace Controller.Controllers
{
    [RoutePrefix("api/menus")]
    public class MenuController : WebApiController
    {
        private readonly IMenuService _menuService;

        public MenuController(IMenuService menuService)
        {
            if (menuService == null) throw new ArgumentNullException("menuService");
            _menuService = menuService;
        }

        [HttpPut]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult AddMenu([FromBody]MenuInsertWithDishes menuInsertWithDishes)
        {
            var response = _menuService.AddMenu(menuInsertWithDishes);
            return ResponseMessage(response);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("")]
        public IHttpActionResult Update([FromBody]MenuUpdateWithDishes menuUpdateWithDishes)
        {
            var response = _menuService.EditMenu(menuUpdateWithDishes);
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("restaurant/{restaurantId}")]
        public IHttpActionResult GetMenuByRestaurantId(string restaurantId)
        {
            var response = _menuService.GetMenuByRestaurantId(restaurantId);
            return ResponseMessage(response);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("menu/{menuId}")]
        public IHttpActionResult GetDishByMenuId(string menuId)
        {
            var response = _menuService.GetDishByMenuId(menuId);
            return ResponseMessage(response);
        }
    }
}
