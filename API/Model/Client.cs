using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Model
{
    public class Client
    {
        //[Required(ErrorMessageResourceType = typeof(Users), ErrorMessageResourceName = "IdRequired")]
        //[MaxLength(350, ErrorMessageResourceType = typeof(Users), ErrorMessageResourceName = "MaximumEmailLength")]
        
        
        
        
        [BsonId]
        public string Id { get; set; }
        public Account Account { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Adress { get; set; }
        public string Telephone { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
