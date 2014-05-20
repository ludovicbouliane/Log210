using System;
using System.Net;
using DataAccess.Repositories.Interfaces;
using Domain.Response;
using Domain.Services.Interfaces;
using Model.ControllerModel;
using Model.DomainModel;
using MongoDB.Bson;

namespace Domain.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IRestaurantManagerRepository _restaurantManagerRepository;
        private readonly IContractorRepository _contractorRepository;
        private readonly IClientRepository _clientRepository;

        public AccountService(IAccountRepository accountRepository, IRestaurantManagerRepository restaurantManagerRepository, IContractorRepository contractorRepository, IClientRepository clientRepository)
        {
            if (accountRepository == null) throw new ArgumentNullException("accountRepository");
            if (restaurantManagerRepository == null) throw new ArgumentNullException("restaurantManagerRepository");
            if (contractorRepository == null) throw new ArgumentNullException("contractorRepository");
            if (clientRepository == null) throw new ArgumentNullException("clientRepository");

            _accountRepository = accountRepository;
            _restaurantManagerRepository = restaurantManagerRepository;
            _contractorRepository = contractorRepository;
            _clientRepository = clientRepository;
        }

        public IResponse Authentificate(Account account)
        {
            var response = new Response.Response();

            var user = _accountRepository.GetSingle(a => a.Username == account.Username && a.Password == account.Password);

            if (user != null)
            {
                var userAccount = new UserAccount{ Id = user.Id };
                userAccount.AccountType = GetAccountType(userAccount.Id);
                response.Set(HttpStatusCode.OK, userAccount);

                return response;
            }
            
            response.Set(HttpStatusCode.NotFound, "No user found");
            return response;
        }

        private string GetAccountType(string accountId)
        {
            if (_restaurantManagerRepository.GetSingle(a => a.AccountId == accountId) != null) return "Restaurant Manager";
            if (_contractorRepository.GetSingle(a => a.AccountId == accountId) != null) return "Contractor";
            if (_clientRepository.GetSingle(a => a.AccountId == accountId) != null) return "Client";

            return String.Empty;
        }

        public IResponse UpdatePassword(PasswordUpdate passwordUpdate)
        {
            var response = new Response.Response();

            var account = _accountRepository.GetSingle(a => a.Id == passwordUpdate.Id);
            if (account != null)
            {
                account.Password = passwordUpdate.Password;
                _accountRepository.Save(account);
                response.Set(HttpStatusCode.NoContent);
                return response;
            }

            response.Set(HttpStatusCode.NotFound, "No user found");
            return response;
        }

        public bool IsUsernameAlreadyTaken(string username)
        {
            var user = _accountRepository.GetSingle(a => a.Username == username);
            if (user != null) return true;

            return false;
        }

        public string CreateAccount(Account account)
        {
            account.Id = ObjectId.GenerateNewId().ToString();
            _accountRepository.Insert(account);

            return account.Id;
        }
    }
}
