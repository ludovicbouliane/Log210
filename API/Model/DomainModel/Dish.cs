using MongoDB.Bson.Serialization.Attributes;

namespace Model.DomainModel
{
    public class Dish
    {
        [BsonId]
        public string Id { get; set; }
        public string MenuId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
    }
}
