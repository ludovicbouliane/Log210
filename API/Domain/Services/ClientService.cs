using System;
using System.Globalization;
using System.Linq;
using System.Net;
using AutoMapper;
using DataAccess.Repositories.Interfaces;
using Domain.Services.Interfaces;
using Model;
using MongoDB.Bson;

namespace Domain.Services
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository _clientRepository;

        public ClientService(IClientRepository clientRepository)
        {
            if (clientRepository == null) throw new ArgumentNullException("clientRepository");
            _clientRepository = clientRepository;
        }

        public IResponse Create(Client client)
        {
            var response = new Response();

            client.Id = ObjectId.GenerateNewId().ToString(); 

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

        //public IResponse GetUserById(int userId)
        //{
        //    var response = new Response();
        //    var user = _clientRepository.GetSingle(u => u.Id == userId);

        //    if (user == null)
        //    {
        //        response.Set(HttpStatusCode.NotFound, "No User Found");
        //        return response;
        //    }

        //    var client = Mapper.Map<User, Client>(user);

        //    response.Set(HttpStatusCode.OK, client);
        //    return response;
        //}

        //public IResponse GetAllUsers()
        //{
        //    var response = new Response();
        //    var users = _clientRepository.GetAll();
            
        //    if (!users.Any())
        //    {
        //        response.Set(HttpStatusCode.NoContent, "No User Found");
        //        return response;
        //    }

        //    var userModels = users.Select(Mapper.Map<User, Client>).ToList();

        //    response.Set(HttpStatusCode.OK, userModels);
        //    return response;
        //}
    }
}
