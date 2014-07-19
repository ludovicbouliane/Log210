using System.Collections.Generic;
using Model.DomainModel;
using MongoDB.Bson.Serialization.Attributes;

namespace Model.ControllerModel
{
    public class OrderInfo
    {
        [BsonId]
        public string Id { get; set; }
        public RestaurantThumbnail RestaurantThumbnail { get; set; }
        public List<DishThumbnail> Dishes { get; set; }
        public Address DeliveryAddress { get; set; }
    }
}