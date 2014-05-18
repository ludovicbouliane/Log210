using MongoDB.Bson.Serialization.Attributes;

namespace Model
{
    public class RestaurantManager
    {
        [BsonId]
        public string Id { get; set; }
        public Account Account { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}