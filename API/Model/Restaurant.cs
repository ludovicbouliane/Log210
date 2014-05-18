using MongoDB.Bson.Serialization.Attributes;

namespace Model
{
    public class Restaurant
    {
        [BsonId]
        public string Id { get; set; }
        public string RestaurantManagerId { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }
        public string Telephone { get; set; }
    }
}