using System;
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
    public class RestaurantManagerService : IRestaurantManagerService
    {
        private readonly IRestaurantManagerRepository _restaurantManagerRepository;
        private readonly IAccountService _accountService;

        public RestaurantManagerService(IRestaurantManagerRepository restaurantManagerRepository, IAccountService accountService)
        {
            if (restaurantManagerRepository == null) throw new ArgumentNullException("restaurantManagerRepository");
            if (accountService == null) throw new ArgumentNullException("accountService");
            
            _restaurantManagerRepository = restaurantManagerRepository;
            _accountService = accountService;
        }

        public IResponse Create(RestaurantManagerWithAccount restaurantManagerWithAccount)
        {
            var response = new Response.Response();

            if (_accountService.IsUsernameAlreadyTaken(restaurantManagerWithAccount.Account.Username))
            {
                response.Set(HttpStatusCode.BadRequest, "Username already exist");
                return response;
            }

            var restaurantManager = Mapper.Map<RestaurantManagerWithAccount, RestaurantManager>(restaurantManagerWithAccount);

            restaurantManagerWithAccount.Account.AccountType = "Restaurant Manager";
            _accountService.CreateAccount(restaurantManagerWithAccount.Account);
            restaurantManager.Id = ObjectId.GenerateNewId().ToString();
            restaurantManager.AccountUsername = restaurantManagerWithAccount.Account.Username;

            _restaurantManagerRepository.Insert(restaurantManager);

            response.Set(HttpStatusCode.Created);
            return response;
        }

        public IResponse Update(RestaurantManager restaurantManager)
        {
            var response = new Response.Response();

            var existingRestaurantManager = _restaurantManagerRepository.GetSingle(r => r.Id == restaurantManager.Id);
            if (existingRestaurantManager == null)
            {
                response.Set(HttpStatusCode.NotFound, "No restaurant manager found");
                return response;
            }

            _restaurantManagerRepository.Save(restaurantManager);

            response.Set(HttpStatusCode.NoContent);
            return response;
        }

        public IResponse Delete(string restaurantManagerId)
        {
            var response = new Response.Response();

            _restaurantManagerRepository.Delete(restaurantManagerId);

            response.Set(HttpStatusCode.OK);
            return response;
        }

        public IResponse GetRestaurantManagerById(string restaurantManagerId)
        {
            var response = new Response.Response();
            var restaurantManager = _restaurantManagerRepository.GetSingle(r => r.Id == restaurantManagerId);

            if (restaurantManager == null)
            {
                response.Set(HttpStatusCode.NotFound, "No restaurant manager found");
                return response;
            }

            response.Set(HttpStatusCode.OK, restaurantManager);
            return response;
        }

        public IResponse GetAllRestaurantManagerName()
        {
            throw new NotImplementedException();
        }

        public IResponse GetAll()
        {
            var response = new Response.Response();

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