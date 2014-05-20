﻿using DataAccess.Repositories.Interfaces;
using Model.DomainModel;

namespace DataAccess.Repositories
{
    public class RestaurantManagerRepository : Repository<RestaurantManager>, IRestaurantManagerRepository
    {
    }
}