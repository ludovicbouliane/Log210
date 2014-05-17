using System;

namespace Domain.DomainObjects
{
    public class Client
    {
        //[Required(ErrorMessageResourceType = typeof(Users), ErrorMessageResourceName = "IdRequired")]
        //[MaxLength(350, ErrorMessageResourceType = typeof(Users), ErrorMessageResourceName = "MaximumEmailLength")]
        
        public int Id { get; set; }
        public Account Account { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Adress { get; set; }
        public string Telephone { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
