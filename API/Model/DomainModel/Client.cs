using System;
using System.Collections.Generic;
using Model.ControllerModel;
using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class Client
    {
        [BsonId]
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public Address Address { get; set; }
        public List<PredefineAddress> AddressList { get; set; }
        public string Telephone { get; set; }
        public DateTime BirthDate { get; set; }

        public Client()
        {
            AddressList = new List<PredefineAddress>();
        }
    }
}
