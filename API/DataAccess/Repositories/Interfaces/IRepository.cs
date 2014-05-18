using System;
using System.Collections.Generic;

namespace DataAccess.Repositories.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IList<T> GetAll();
        T GetSingle(Func<T, bool> where);
        void Insert(params T[] items);
        void Save(params T[] items);
        void Delete(params string[] ids);
    }
}