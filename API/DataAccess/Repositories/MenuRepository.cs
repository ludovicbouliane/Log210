using DataAccess.Repositories.Interfaces;
using Model.DomainModel;

namespace DataAccess.Repositories
{
    public class MenuRepository : Repository<Menu>, IMenuRepository
    {

        public override void Save(params Menu[] items)
        {
            foreach (var menu in items)
            {
                var collection = _database.GetCollection<Menu>(typeof(Menu).Name.ToLower() + "s");

                var existingMenu = GetSingle(c => c.Id == menu.Id);
                if (menu.Name != null) existingMenu.Name = menu.Name;

                collection.Save(existingMenu);
            }
        }

    }
}
