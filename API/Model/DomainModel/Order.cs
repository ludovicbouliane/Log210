using Model.Enum;
using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class Order
    {
        [BsonId]
        public string Id { get; set; }
        public OrderStatusType Status { get; set; }
    }
}