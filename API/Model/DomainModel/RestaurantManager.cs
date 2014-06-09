using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class RestaurantManager
    {
        [BsonId]
        public string Username { get; set; }
        public string ContractorUsername { get; set; }
        public List<string> RestaurantIds { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public RestaurantManager()
        {
            RestaurantIds = new List<string>();
        }
    }
}