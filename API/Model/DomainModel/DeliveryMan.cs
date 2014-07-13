using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class DeliveryMan
    {
        [BsonId]
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}