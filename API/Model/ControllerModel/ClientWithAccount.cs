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
        public string Email { get; set; }
        public Address Address { get; set; }
        public string Telephone { get; set; }
        public DateTime BirthDate { get; set; }
    }
}