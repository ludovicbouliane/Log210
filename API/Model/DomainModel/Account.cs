using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class Account
    {
        [BsonId]
        public string Username { get; set; }
        public string Password { get; set; }
        public string AccountType { get; set; }
    }
}