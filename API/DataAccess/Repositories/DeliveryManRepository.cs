using System;
using DataAccess.Repositories.Interfaces;
using Model.DomainModel;

namespace DataAccess.Repositories
{
    public class DeliveryManRepository : Repository<DeliveryMan>, IDeliveryManRepository
    {
        public override void Save(params DeliveryMan[] items)
        {
            foreach (var deliveryMan in items)
            {
                var collection = _database.GetCollection<DeliveryMan>(typeof(DeliveryMan).Name.ToLower() + "s");

                var existingClient = GetSingle(d => d.Username == deliveryMan.Username);

                collection.Save(existingClient);
            }
        }
    }
}
