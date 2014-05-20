using System;
using Model.DomainModel;

namespace Model.ControllerModel
{
    public class ClientWithAccount
    {
        public string Id { get; set; }
        public Account Account { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public string Telephone { get; set; }
        public DateTime BirthDate { get; set; }
    }
}