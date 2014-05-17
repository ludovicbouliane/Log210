using System.Web.Http;
using AutoMapper;
using DataAccess.Models;
using Domain.Models;
using WebService.App_Start;

namespace WebService.Initializers
{
    public class AutoMapperInitializer : IApplicationInitializer
    {
        public void Initialize(HttpConfiguration config)
        {
            Mapper.CreateMap<User, UserModel>();
            Mapper.CreateMap<UserModel, User>();

            Mapper.CreateMap<Club, ClubModel>();
            Mapper.CreateMap<ClubModel, Club>();
        }
    }
}