using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class Restaurant
    {
        [BsonId]
        public string Id { get; set; }
        public string ContractorUsername { get; set; }
        public string Name { get; set; }
        public Address Address { get; set; }
        public string Telephone { get; set; }
    }
}