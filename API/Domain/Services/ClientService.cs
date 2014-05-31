using System;
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
    public class ClientService : IClientService
    {
        private readonly IClientRepository _clientRepository;
        private readonly IAccountService _accountService;

        public ClientService(IClientRepository clientRepository, IAccountService accountService)
        {
            if (clientRepository == null) throw new ArgumentNullException("clientRepository");
            if (accountService == null) throw new ArgumentNullException("accountService");

            _clientRepository = clientRepository;
            _accountService = accountService;
        }

        public IResponse Create(ClientWithAccount clientWithAccount)
        {
            var response = new Response.Response();

            if (_accountService.IsUsernameAlreadyTaken(clientWithAccount.Account.Username))
            {
                response.Set(HttpStatusCode.BadRequest, "Username already exist");
                return response;
            }

            var client = Mapper.Map<ClientWithAccount, Client>(clientWithAccount);

            clientWithAccount.Account.AccountType = "Client";
            _accountService.CreateAccount(clientWithAccount.Account);
            client.Username = clientWithAccount.Account.Username;

            _clientRepository.Insert(client);

            response.Set(HttpStatusCode.Created);
            return response;
        }

        public IResponse Update(Client client)
        {
            var response = new Response.Response();

            var existingClient = _clientRepository.GetSingle(c => c.Username == client.Username);
            if (existingClient == null)
            {
                response.Set(HttpStatusCode.NotFound, "No clients found");
                return response;
            }

            _clientRepository.Save(client);

            response.Set(HttpStatusCode.NoContent);
            return response;
        }

        public IResponse GetAll()
        {
            var response = new Response.Response();

            var clients = _clientRepository.GetAll();

            if (!clients.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No clients found");
                return response;
            }

            response.Set(HttpStatusCode.OK, clients);

            return response;
        }

        public IResponse GetClientByUsername(string username)
        {
            var response = new Response.Response();
            var client = _clientRepository.GetSingle(c => c.Username == username);

            if (client == null)
            {
                response.Set(HttpStatusCode.NotFound, "No client found");
                return response;
            }
            
            response.Set(HttpStatusCode.OK, client);
            return response;
        }
    }
}
