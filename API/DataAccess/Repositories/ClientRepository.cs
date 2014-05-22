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

                var existingClient = GetSingle(c => c.Id == client.Id);

                if (client.Address != null) existingClient.Address = client.Address;
                if (client.City != null) existingClient.City = client.City;
                if (client.State != null) existingClient.State = client.State;
                if (client.Country != null) existingClient.Country = client.Country;
                if (client.ZipCode != null) existingClient.ZipCode = client.ZipCode;
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
