using System.Web.Http;
using WebService.App_Start;

namespace WebService.Initializers
{
    public class AutoMapperInitializer : IApplicationInitializer
    {
        public void Initialize(HttpConfiguration config)
        {
            //Mapper.CreateMap<User, Client>();
            //Mapper.CreateMap<Client, User>();
        }
    }
}