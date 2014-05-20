using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class Contractor
    {
        [BsonId]
        public string Id { get; set; }
        public string AccountId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}