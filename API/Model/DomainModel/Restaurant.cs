using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class Restaurant
    {
        [BsonId]
        public string Id { get; set; }
        public string RestaurantManagerId { get; set; }
        public string ContractorId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public string Telephone { get; set; }
    }
}