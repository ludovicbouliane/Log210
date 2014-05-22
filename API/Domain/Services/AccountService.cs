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

            var userAccount = _accountRepository.GetSingle(a => a.Username == account.Username && a.Password == account.Password);

            if (userAccount != null)
            {
                response.Set(HttpStatusCode.OK, BuildUserAccount(userAccount.Id));

                return response;
            }
            
            response.Set(HttpStatusCode.NotFound, "No user found");
            return response;
        }

        private UserAccount BuildUserAccount(string accountId)
        {
            var userAccount = new UserAccount();

            var restaurantManager = _restaurantManagerRepository.GetSingle(a => a.AccountId == accountId);
            if (restaurantManager != null)
            {
                userAccount.Id = restaurantManager.Id;
                userAccount.AccountType = "Restaurant Manager";
            }

            var contractor = _contractorRepository.GetSingle(a => a.AccountId == accountId);
            if (contractor != null)
            {
                userAccount.Id = contractor.Id;
                userAccount.AccountType = "Contractor";
            }

            var client = _clientRepository.GetSingle(a => a.AccountId == accountId);
            if (client != null)
            {
                userAccount.Id = client.Id;
                userAccount.AccountType = "Client";
            }

            return userAccount;
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

        public IResponse GetUsernameByAccountId(string accountId)
        {
            var response = new Response.Response();

            var account = _accountRepository.GetSingle(a => a.Id == accountId);
            if (account != null)
            {
                response.Set(HttpStatusCode.OK, account.Username);
                return response;
            }

            response.Set(HttpStatusCode.NotFound, "No user found");
            return response;
        }
    }
}
