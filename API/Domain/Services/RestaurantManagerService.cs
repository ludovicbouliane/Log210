using System;
using System.Linq;
using System.Net;
using DataAccess.Repositories.Interfaces;
using Domain.Services.Interfaces;
using Model;
using MongoDB.Bson;

namespace Domain.Services
{
    public class RestaurantManagerService : IRestaurantManagerService
    {
        private readonly IRestaurantManagerRepository _restaurantManagerRepository;

        public RestaurantManagerService(IRestaurantManagerRepository restaurantManagerRepository)
        {
            if (restaurantManagerRepository == null) throw new ArgumentNullException("restaurantManagerRepository");
            _restaurantManagerRepository = restaurantManagerRepository;
        }

        public IResponse Create(RestaurantManager restaurantManager)
        {
            var response = new Response();

            restaurantManager.Id = ObjectId.GenerateNewId().ToString();

            _restaurantManagerRepository.Insert(restaurantManager);

            response.Set(HttpStatusCode.Created);
            return response;
        }

        public IResponse GetAll()
        {
            var response = new Response();

            var restaurantManagers = _restaurantManagerRepository.GetAll();

            if (!restaurantManagers.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No restaurant managers found");
                return response;
            }

            response.Set(HttpStatusCode.OK, restaurantManagers);

            return response;
        }
    }
}