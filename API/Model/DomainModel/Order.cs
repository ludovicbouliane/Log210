using System.Collections.Generic;
using Model.ControllerModel;
using Model.Enum;
using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class Order
    {
        [BsonId]
        public string Id { get; set; }
        public string Username { get; set; }
        public string RestaurantId { get; set; }
        public string MenuId { get; set; }
        public string DeliveryManUsername { get; set; }
        public OrderStatusType Status { get; set; }
        public List<OrderDish> Dishes { get; set; }
        public string ConfirmationNumber { get; set; }
        public Address Address { get; set; }
        public string DeliveryTime { get; set; }
    }
}