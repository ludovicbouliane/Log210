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
    public class RestaurantService : IRestaurantService
    {
        #region Fields

        private readonly IRestaurantRepository _restaurantRepository;

        #endregion

        #region Constructor

        public RestaurantService(IRestaurantRepository restaurantRepository)
        {
            if (restaurantRepository == null) throw new ArgumentNullException("restaurantRepository");
            _restaurantRepository = restaurantRepository;
        }

        #endregion

        #region Methods

        public IResponse Create(Restaurant restaurant)
        {
            var response = new Response.Response();

            restaurant.Id = ObjectId.GenerateNewId().ToString();

            _restaurantRepository.Insert(restaurant);

            response.Set(HttpStatusCode.Created);
            return response;
        }

        public IResponse Update(Restaurant restaurant)
        {
            var response = new Response.Response();

            var existingRestaurant = _restaurantRepository.GetSingle(c => c.Id == restaurant.Id);
            if (existingRestaurant == null)
            {
                response.Set(HttpStatusCode.NotFound, "No restaurant found");
                return response;
            }

            _restaurantRepository.Save(restaurant);

            response.Set(HttpStatusCode.NoContent);
            return response;
        }

        public void Delete(string restaurantId)
        {
            _restaurantRepository.Delete(restaurantId);
        }

        public IResponse GetRestaurantById(string restaurantId)
        {
            var response = new Response.Response();
            var restaurant = _restaurantRepository.GetSingle(r => r.Id == restaurantId);

            if (restaurant == null)
            {
                response.Set(HttpStatusCode.NotFound, "No restaurant found");
                return response;
            }

            response.Set(HttpStatusCode.OK, restaurant);
            return response;
        }

        public IResponse GetAllRestaurantName()
        {
            var response = new Response.Response();

            var restaurants = _restaurantRepository.GetAll();

            if (!restaurants.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No restaurants found");
                return response;
            }

            var restaurantNames = restaurants.Select(Mapper.Map<Restaurant, RestaurantName>).ToList();

            response.Set(HttpStatusCode.OK, restaurantNames);

            return response;
        }

        public IResponse GetAllRestaurant()
        {
            var response = new Response.Response();

            var restaurants = _restaurantRepository.GetAll();

            if (!restaurants.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No restaurants found");
                return response;
            }

            response.Set(HttpStatusCode.OK, restaurants);

            return response;
        }

        public IResponse GetRestaurantByContractorUsername(string contractorUsername)
        {
            var response = new Response.Response();
            var restaurants = _restaurantRepository.GetAll();

            if (restaurants == null)
            {
                response.Set(HttpStatusCode.NotFound, "No restaurant found");
                return response;
            }

            response.Set(HttpStatusCode.OK, restaurants.Where(r => r.ContractorUsername == contractorUsername).ToList());
            return response;
        }

        public List<Restaurant> GetAllRestaurantsByRestaurantIds(IEnumerable<string> ids)
        {
            var restaurants = _restaurantRepository.GetAll();
            return ids.Select(id => restaurants.FirstOrDefault(r => r.Id == id)).ToList();
        }

        #endregion
    }
}