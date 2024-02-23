using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Helpers
{
    public class Mapper : Profile
    {
        public Mapper()
        {
            CreateMap<Product, ProductModel>().ReverseMap();
            CreateMap<Category, CategoryModel>().ReverseMap();
            CreateMap<CategoryMenu, CategoryMenuModel>().ReverseMap();
            CreateMap<Topping, ToppingModel>().ReverseMap();
            CreateMap<Banner, BannerModel>().ReverseMap();
        }
    }
}
