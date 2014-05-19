using System;
using System.Linq;
using System.Net;
using DataAccess.Repositories.Interfaces;
using Domain.Services.Interfaces;
using Model;
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

        public IResponse Create(Client client)
        {
            var response = new Response();

            client.Id = ObjectId.GenerateNewId().ToString();

            if (_accountService.IsUsernameAlreadyTaken(client.Account.Username))
            {
                response.Set(HttpStatusCode.BadRequest, "Username already exist");
                return response;
            }

            _clientRepository.Insert(client);

            response.Set(HttpStatusCode.Created);
            return response;
        }

        public IResponse Update(Client client)
        {
            var response = new Response();

            var existingClient = _clientRepository.GetSingle(c => c.Id == client.Id);
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
            var response = new Response();

            var clients = _clientRepository.GetAll();

            if (!clients.Any())
            {
                response.Set(HttpStatusCode.NoContent, "No clients found");
                return response;
            }

            response.Set(HttpStatusCode.OK, clients);

            return response;
        }

        public IResponse GetClientById(string clientId)
        {
            var response = new Response();
            var client = _clientRepository.GetSingle(c => c.Id == clientId);

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
