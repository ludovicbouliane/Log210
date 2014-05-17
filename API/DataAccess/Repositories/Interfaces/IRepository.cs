using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace DataAccess.Repositories.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IList<T> GetAll();
        T GetSingle(Func<T, bool> where, params Expression<Func<T, object>>[] navigationProperties);
        void Save(params T[] items);
    }
}