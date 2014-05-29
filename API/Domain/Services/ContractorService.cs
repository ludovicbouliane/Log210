using System;
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
    public class ContractorService : IContractorService
    {
        private readonly IContractorRepository _contractorRepository;
        private readonly IAccountService _accountService;

        public ContractorService(IContractorRepository contractorRepository, IAccountService accountService)
        {
            if (contractorRepository == null) throw new ArgumentNullException("contractorRepository");
            if (accountService == null) throw new ArgumentNullException("accountService");

            _contractorRepository = contractorRepository;
            _accountService = accountService;
        }

        public IResponse Create(ContractorWithAccount contractorWithAccount)
        {
            var response = new Response.Response();

            if (_accountService.IsUsernameAlreadyTaken(contractorWithAccount.Account.Username))
            {
                response.Set(HttpStatusCode.BadRequest, "Username already exist");
                return response;
            }

            var contractor = Mapper.Map<ContractorWithAccount, Contractor>(contractorWithAccount);

            contractorWithAccount.Account.AccountType = "Contractor";
            _accountService.CreateAccount(contractorWithAccount.Account);
            contractor.Id = ObjectId.GenerateNewId().ToString();
            contractor.AccountUsername = contractorWithAccount.Account.Username;

            _contractorRepository.Insert(contractor);

            response.Set(HttpStatusCode.Created);
            return response;
        }
    }
}
