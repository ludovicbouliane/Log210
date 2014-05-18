using System;
using DataAccess.Repositories.Interfaces;
using Model;
using MongoDB.Driver;

namespace DataAccess.Repositories
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public ClientRepository(MongoClient mongoClient)
            : base(mongoClient)
        {

        }

        public override void Save(params Client[] items)
        {
            foreach (var client in items)
            {
                var collection = _database.GetCollection<Client>(typeof(Client).Name.ToLower() + "s");

                var existingClient = GetSingle(c => c.Id == client.Id);

                if (client.Adress != null)
                {
                    existingClient.Adress = client.Adress;
                }
                if (client.BirthDate != DateTime.MinValue)
                {
                    existingClient.BirthDate = client.BirthDate;
                }
                if (client.FirstName != null)
                {
                    existingClient.FirstName = client.FirstName;
                }
                if (client.LastName != null)
                {
                    existingClient.LastName = client.LastName;
                }
                if (client.Telephone != null)
                {
                    existingClient.Telephone = client.Telephone;
                }

                collection.Save(existingClient);
            }
        }
    }
}
