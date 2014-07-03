using System.Web.Http;
using AutoMapper;
using Model.ControllerModel;
using Model.DomainModel;
using WebService.App_Start;

namespace WebService.Initializers
{
    public class AutoMapperInitializer : IApplicationInitializer
    {
        public void Initialize(HttpConfiguration config)
        {
            Mapper.CreateMap<ClientWithAccount, Client>();
            Mapper.CreateMap<RestaurantManagerWithAccount, RestaurantManager>();
            Mapper.CreateMap<RestaurantManager, RestaurantManagerWithRestaurants>();
            Mapper.CreateMap<Restaurant, RestaurantName>();
            Mapper.CreateMap<ContractorWithAccount, Contractor>();
            Mapper.CreateMap<Order, OrderStatus>();
        }
    }
}