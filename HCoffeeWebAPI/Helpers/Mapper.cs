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
            CreateMap<Cart, CartModel>().ReverseMap();
            CreateMap<CartDetail, CartDetailModel>().ReverseMap();
            CreateMap<Cart, CartModel>().ReverseMap();
            CreateMap<ListProductInCart, ListProductInCartModel>().ReverseMap();
            CreateMap<Order, OrderModel>().ReverseMap();
            CreateMap<OrderDetail, OrderDetailModel>().ReverseMap();
            CreateMap<ListProductChoose, ListProductChooseModel>().ReverseMap();

            CreateMap<Notification, NotificationModel>().ReverseMap();
            //CreateMap<User, UserModel>().ReverseMap();
        }
    }
}
