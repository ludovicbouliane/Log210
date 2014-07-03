using DataAccess.Repositories.Interfaces;
using Model.DomainModel;

namespace DataAccess.Repositories
{
    public class DishRepository : Repository<Dish>, IDishRepository
    {

        public override void Save(params Dish[] items)
        {
            foreach (var dish in items)
            {
                var collection = _database.GetCollection<Menu>(typeof(Menu).Name.ToLower() + "s");

                var existingDish = GetSingle(c => c.Id == dish.Id);
                if (dish.Name != null) existingDish.Name = dish.Name;
                if (dish.Description != null) existingDish.Description = dish.Description;
                existingDish.Price = dish.Price;

                collection.Save(existingDish);
            }
        }

    }
}
