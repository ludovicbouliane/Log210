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

        public IResponse AddPredefinedAddress(ClientPredefinedAddress clientPredefinedAddress)
        {
            var response = new Response.Response();

            var existingClient = _clientRepository.GetSingle(c => c.Username == clientPredefinedAddress.Username);
            if (existingClient == null)
            {
                response.Set(HttpStatusCode.NotFound, "No clients found");
                return response;
            }

            var predefinedAddress = new PredefineAddress();
            predefinedAddress.Address = clientPredefinedAddress.Address;
            predefinedAddress.Name = clientPredefinedAddress.Name;
            predefinedAddress.Id = ObjectId.GenerateNewId().ToString();

            existingClient.AddressList.Add(predefinedAddress);
            _clientRepository.Save(existingClient);

            response.Set(HttpStatusCode.NoContent);
            return response;
        }

        public IResponse GetAllPredefinedAddress(string username)
        {
            var response = new Response.Response();
            var client = _clientRepository.GetSingle(c => c.Username == username);

            if (client == null)
            {
                response.Set(HttpStatusCode.NotFound, "No address found");
                return response;
            }

            response.Set(HttpStatusCode.OK, client.AddressList);
            return response;
        }

        public IResponse GetAddressDetail(string addressId)
        {
            var response = new Response.Response();
            var clients = _clientRepository.GetAll();

            PredefineAddress address = null;

            foreach (var client in clients)
            {
                if (address == null)
                {
                    address = client.AddressList.FirstOrDefault(a => a.Id == addressId);
                }
                
            }

            if (address == null)
            {
                response.Set(HttpStatusCode.NotFound, "No address found");
                return response;
            }

            response.Set(HttpStatusCode.OK, address);
            return response;
        }
    }
}
