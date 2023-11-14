using AutoMapper;
using Midterm.Models.DTO;
using Midterm.Models.Entity;

namespace Midterm
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<User, UserDTO>().ReverseMap();
        }
    }
}
