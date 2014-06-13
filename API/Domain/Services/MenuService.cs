using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using AutoMapper;
using DataAccess.Repositories.Interfaces;
using Domain.Response;
using Domain.Services.Interfaces;
using Model.ControllerModel;
using Model.DomainModel;
using MongoDB.Bson;

namespace Domain.Services
{
    public class MenuService : IMenuService
    {

        #region Fields

        private readonly IMenuRepository _menuRepository;
        private readonly IDishRepository _dishRepository;

        #endregion

        #region Constructor

        public MenuService(IMenuRepository menuRepository, IDishRepository dishRepository)
        {
            if (menuRepository == null) throw new ArgumentNullException("menuRepository");
            _menuRepository = menuRepository;

            if (dishRepository == null) throw new ArgumentNullException("dishRepository");
            _dishRepository = dishRepository;
        }

        #endregion

        #region Methods

        public IResponse GetMenuByRestaurantId(string restaurantId)
        {
            var response = new Response.Response();
            var menu = _menuRepository.GetSingle(r => r.RestaurantId == restaurantId);

            if (menu == null)
            {
                response.Set(HttpStatusCode.NotFound, "No menu found");
                return response;
            }

            response.Set(HttpStatusCode.OK, menu);
            return response;
        }

        public IResponse AddMenu(MenuInsertWithDishes menuInsertWithDishes)
        {
            var response = new Response.Response();
            var menu = new Menu();

            menu.Id = ObjectId.GenerateNewId().ToString();
            menu.RestaurantId = menuInsertWithDishes.RestaurantId;
            menu.Name = menuInsertWithDishes.Name;

            foreach (var dish in menuInsertWithDishes.Dishes)
            {
                dish.Id = ObjectId.GenerateNewId().ToString();
                dish.MenuId = menu.Id;
                _dishRepository.Insert(dish);
            }

            _menuRepository.Insert(menu);

            response.Set(HttpStatusCode.Created);
            return response;
        }

        public IResponse EditMenu(MenuUpdateWithDishes menuUpdateWithDishes)
        {
            var response = new Response.Response();


            var existingMenu = _menuRepository.GetSingle(c => c.Id == menuUpdateWithDishes.MenuId);
            if (existingMenu == null)
            {
                response.Set(HttpStatusCode.NotFound, "No menu found");
                return response;
            }

            var menu = new Menu();
            menu.Id = menuUpdateWithDishes.MenuId;
            menu.Name = menuUpdateWithDishes.Name;

            var delDishes = _dishRepository.GetAll();

            delDishes = delDishes.Where(c => c.MenuId == menu.Id).ToList();

            foreach (var deldis in delDishes)
            {
                _dishRepository.Delete(deldis.Id);
            }

            foreach (var dish in menuUpdateWithDishes.Dishes)
            {
                dish.Id = ObjectId.GenerateNewId().ToString();
                dish.MenuId = menu.Id;
                _dishRepository.Insert(dish);
            }

            _menuRepository.Save(menu);

            response.Set(HttpStatusCode.NoContent);
            return response;
        }


        public IResponse GetDishByMenuId(string menuId)
        {
            var response = new Response.Response();
            var dishes = _dishRepository.GetAll();

            dishes = dishes.Where(r => r.MenuId == menuId).ToList();

            if (dishes == null)
            {
                response.Set(HttpStatusCode.NotFound, "No dishes found");
                return response;
            }

            response.Set(HttpStatusCode.OK, dishes);
            return response;
        }

        #endregion

    }
}
