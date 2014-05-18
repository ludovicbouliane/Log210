using System;
using System.Linq;
using System.Net;
using DataAccess.Repositories.Interfaces;
using Domain.Services.Interfaces;
using Model;
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
            var response = new Response();

            restaurant.Id = ObjectId.GenerateNewId().ToString();

            _restaurantRepository.Insert(restaurant);

            response.Set(HttpStatusCode.Created);
            return response;
        }

        public IResponse Update(Restaurant restaurant)
        {
            var response = new Response();

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
            var response = new Response();

            _restaurantRepository.Delete(restaurantId);

            response.Set(HttpStatusCode.OK);
            return response;
        }
    }
}