using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.DomainModel
{
    public class Menu
    {
        [BsonId]
        public string Id { get; set; }
        public string RestaurantId { get; set; }
        public string Name { get; set; }
    }
}
