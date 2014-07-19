using DataAccess.Repositories.Interfaces;
using Model.DomainModel;

namespace DataAccess.Repositories
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public override void Save(params Order[] items)
        {
            foreach (var order in items)
            {
                var collection = _database.GetCollection<Order>(typeof(Order).Name.ToLower() + "s");

                var existingClient = GetSingle(c => c.Id == order.Id);

                existingClient.Status = order.Status;
                existingClient.DeliveryManUsername = order.DeliveryManUsername;

                collection.Save(existingClient);
            }
        }


    }
}