using System;
using System.Net;
using DataAccess.Repositories.Interfaces;
using Domain.Response;
using Domain.Services.Interfaces;
using Model.ControllerModel;
using Model.DomainModel;

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
                response.Set(HttpStatusCode.OK, BuildUserAccount(userAccount.Username));

                return response;
            }
            
            response.Set(HttpStatusCode.NotFound, "No user found");
            return response;
        }

        private UserAccount BuildUserAccount(string accountUsername)
        {
            var userAccount = new UserAccount();

            var restaurantManager = _restaurantManagerRepository.GetSingle(a => a.AccountUsername == accountUsername);
            if (restaurantManager != null)
            {
                userAccount.Username = accountUsername;
                userAccount.AccountType = "Restaurant Manager";
            }

            var contractor = _contractorRepository.GetSingle(a => a.AccountUsername == accountUsername);
            if (contractor != null)
            {
                userAccount.Username = accountUsername;
                userAccount.AccountType = "Contractor";
            }

            var client = _clientRepository.GetSingle(a => a.AccountUsername == accountUsername);
            if (client != null)
            {
                userAccount.Username = accountUsername;
                userAccount.AccountType = "Client";
            }

            return userAccount;
        }

        public IResponse UpdatePassword(PasswordUpdate passwordUpdate)
        {
            var response = new Response.Response();

            var account = _accountRepository.GetSingle(a => a.Username == passwordUpdate.Username);
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
            return user != null;
        }

        public void CreateAccount(Account account)
        {
            _accountRepository.Insert(account);
        }
    }
}
