using System;
using System.Diagnostics.Eventing.Reader;
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

        public AccountService(IClientRepository clientRepository, IContractorRepository contractorRepository)
        {
            if (clientRepository == null) throw new ArgumentNullException("clientRepository");
            if (clientRepository == null) throw new ArgumentNullException("clientRepository");

            _clientRepository = clientRepository;
            _contractorRepository = contractorRepository;
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

            response.Set(HttpStatusCode.NotFound, "No user found");
            return response;
        }
    }
}
