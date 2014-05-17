using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using DataAccess.Repositories.Interfaces;
using MongoDB.Driver;

namespace DataAccess.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private const string DatabaseName = "LOG210";
        private readonly MongoDatabase _database;

        public Repository(MongoClient mongoClient)
        {
            var mongoServer = mongoClient.GetServer();
            _database = mongoServer.GetDatabase(DatabaseName);
        }

        public virtual IList<T> GetAll()
        {
            var collection = _database.GetCollection<T>(typeof(T).Name.ToLower() + "s");

            var documents = collection.FindAll();

            return documents.ToList();
        }

        public virtual T GetSingle(Func<T, bool> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            var collection = _database.GetCollection<T>(typeof(T).Name.ToLower() + "s");

            var documents = collection.FindAll();

            return documents.FirstOrDefault(where);
        }

        public virtual void Save(params T[] items)
        {
            foreach (T item in items)
            {
                var collection = _database.GetCollection<T>(typeof(T).Name.ToLower() + "s");
                collection.Save(item);
            }
        }
    }
}
