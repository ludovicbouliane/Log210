using System;
using DataAccess.Repositories.Interfaces;
using Model;
using MongoDB.Driver;

namespace DataAccess.Repositories
{
    public class RestaurantRepository : Repository<Restaurant>, IRestaurantRepository
    {
        public RestaurantRepository(MongoClient mongoClient)
            : base(mongoClient)
        {

        }

        public override void Save(params Restaurant[] items)
        {
            foreach (var restaurant in items)
            {
                var collection = _database.GetCollection<Restaurant>(typeof(Restaurant).Name.ToLower() + "s");

                var existingRestaurant = GetSingle(c => c.Id == restaurant.Id);

                if (restaurant.Adress != null)
                {
                    existingRestaurant.Adress = restaurant.Adress;
                }
                if (restaurant.Name != null)
                {
                    existingRestaurant.Name = restaurant.Name;
                }
                if (restaurant.Telephone != null)
                {
                    existingRestaurant.Telephone = restaurant.Telephone;
                }
                if (restaurant.RestaurantManagerId != null)
                {
                    existingRestaurant.RestaurantManagerId = restaurant.RestaurantManagerId;
                }

                collection.Save(existingRestaurant);
            }
        }
    }
}