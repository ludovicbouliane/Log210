using System;
using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class Client
    {
        [BsonId]
        public string Id { get; set; }
        public string AccountUsername { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Address Address { get; set; }
        public string Telephone { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
