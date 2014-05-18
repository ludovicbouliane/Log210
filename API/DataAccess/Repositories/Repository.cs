using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using DataAccess.Repositories.Interfaces;
using MongoDB.Driver;
using MongoDB.Driver.Builders;

namespace DataAccess.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private const string DatabaseName = "LOG210";
        protected readonly MongoDatabase _database;

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

        public virtual T GetSingle(Func<T, bool> where)
        {
            var collection = _database.GetCollection<T>(typeof(T).Name.ToLower() + "s");

            var documents = collection.FindAll();

            return documents.FirstOrDefault(where);
        }

        public virtual void Insert(params T[] items)
        {
            foreach (T item in items)
            {
                var collection = _database.GetCollection<T>(typeof(T).Name.ToLower() + "s");
                collection.Insert(item);
            }
        }

        public virtual void Save(params T[] items)
        {
            foreach (T item in items)
            {
                var collection = _database.GetCollection<T>(typeof(T).Name.ToLower() + "s");
                collection.Save(item);
            }
        }

        public virtual void Delete(params string[] ids)
        {
            foreach (string id in ids)
            {
                var collection = _database.GetCollection<T>(typeof(T).Name.ToLower() + "s");
                //var query = Query<T>.Where(t =>  == );
                collection.Remove(Query.EQ("_id", id));
                //collection.Remove(query);
            }
        }
    }
}
