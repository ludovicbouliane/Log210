using MongoDB.Bson.Serialization.Attributes;

namespace Model.ControllerModel
{
    public class OrderDelivery
    {
        [BsonId]
        public string OrderId { get; set; }
        public string DeliveryManUsername { get; set; }
    }
}