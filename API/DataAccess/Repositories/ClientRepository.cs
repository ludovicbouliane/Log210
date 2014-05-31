using System;
using DataAccess.Repositories.Interfaces;
using Model.DomainModel;

namespace DataAccess.Repositories
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public override void Save(params Client[] items)
        {
            foreach (var client in items)
            {
                var collection = _database.GetCollection<Client>(typeof(Client).Name.ToLower() + "s");

                var existingClient = GetSingle(c => c.Username == client.Username);

                if (client.Address.Street != null) existingClient.Address.Street = client.Address.Street;
                if (client.Address.City != null) existingClient.Address.City = client.Address.City;
                if (client.Address.State != null) existingClient.Address.State = client.Address.State;
                if (client.Address.Country != null) existingClient.Address.Country = client.Address.Country;
                if (client.Address.ZipCode != null) existingClient.Address.ZipCode = client.Address.ZipCode;
                if (client.Telephone != null) existingClient.Telephone = client.Telephone;

                if (client.BirthDate != DateTime.MinValue)
                {
                    existingClient.BirthDate = client.BirthDate;
                }

                collection.Save(existingClient);
            }
        }
    }
}
