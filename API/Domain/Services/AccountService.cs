using System;
using System.Net;
using DataAccess.Repositories.Interfaces;
using Domain.Services.Interfaces;
using Model;

namespace Domain.Services
{
    public class AccountService : IAccountService
    {
        private readonly IClientRepository _clientRepository;
        private readonly IContractorRepository _contractorRepository;
        private readonly IRestaurantManagerRepository _restaurantManagerRepository;

        public AccountService(IClientRepository clientRepository, IContractorRepository contractorRepository, IRestaurantManagerRepository restaurantManagerRepository)
        {
            if (clientRepository == null) throw new ArgumentNullException("clientRepository");
            if (contractorRepository == null) throw new ArgumentNullException("contractorRepository");
            if (restaurantManagerRepository == null) throw new ArgumentNullException("restaurantManagerRepository");

            _clientRepository = clientRepository;
            _contractorRepository = contractorRepository;
            _restaurantManagerRepository = restaurantManagerRepository;
        }

        public IResponse Authentificate(Account account)
        {
            var response = new Response();

            var user = _clientRepository.GetSingle(p => p.Account.Username == account.Username && p.Account.Password == account.Password);

            if (user != null)
            {
                user.Account.Password = String.Empty;
                response.Set(HttpStatusCode.OK, user);

                return response;
            }

            var contractor = _contractorRepository.GetSingle(p => p.Account.Username == account.Username && p.Account.Password == account.Password);

            if (contractor != null)
            {
                contractor.Account.Password = String.Empty;
                response.Set(HttpStatusCode.OK, contractor);
                return response;
            }

            var restaurantManager = _restaurantManagerRepository.GetSingle(p => p.Account.Username == account.Username && p.Account.Password == account.Password);

            if (restaurantManager != null)
            {
                restaurantManager.Account.Password = String.Empty;
                response.Set(HttpStatusCode.OK, restaurantManager);
                return response;
            }

            response.Set(HttpStatusCode.NotFound, "No user found");
            return response;
        }

        public IResponse UpdatePassword(Account account)
        {
            var response = new Response();

            var client = _clientRepository.GetSingle(p => p.Account.Username == account.Username);
            if (client != null)
            {
                client.Account.Password = account.Password;
                _clientRepository.Save(client);
                response.Set(HttpStatusCode.NoContent);
                return response;
            }

            var contractor = _contractorRepository.GetSingle(p => p.Account.Username == account.Username);
            if (contractor != null)
            {
                contractor.Account.Password = account.Password;
                _contractorRepository.Save(contractor);
                response.Set(HttpStatusCode.NoContent);
                return response;
            }

            var restaurantManager = _restaurantManagerRepository.GetSingle(p => p.Account.Username == account.Username);
            if (restaurantManager != null)
            {
                restaurantManager.Account.Password = account.Password;
                _restaurantManagerRepository.Save(restaurantManager);
                response.Set(HttpStatusCode.NoContent);
                return response;
            }

            response.Set(HttpStatusCode.NotFound, "No user found");
            return response;
        }

        public bool IsUsernameAlreadyTaken(string username)
        {
            var user = _clientRepository.GetSingle(p => p.Account.Username == username);
            if (user != null) return true;

            var contractor = _contractorRepository.GetSingle(p => p.Account.Username == username);
            if (contractor != null) return true;

            var restaurantManager = _restaurantManagerRepository.GetSingle(p => p.Account.Username == username);
            if (restaurantManager != null) return true;

            return false;
        }
    }
}
