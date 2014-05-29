using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using AutoMapper;
using DataAccess.Repositories.Interfaces;
using Domain.Response;
using Domain.Services.Interfaces;
using Model;
using Model.ControllerModel;
using Model.DomainModel;
using MongoDB.Bson;

namespace Domain.Services
{
    public class RestaurantService : IRestaurantService
    {
        private readonly IRestaurantRepository _restaurantRepository;

        public RestaurantService(IRestaurantRepository restaurantRepository)
        {
            if (restaurantRepository == null) throw new ArgumentNullException("restaurantRepository");
            _restaurantRepository = restaurantRepository;
        }

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

        public IResponse Delete(string restaurantId)
        {
            var response = new Response.Response();

            _restaurantRepository.Delete(restaurantId);

            response.Set(HttpStatusCode.OK);
            return response;
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
    }
}