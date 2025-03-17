using HCoffeeWebAPI.Helpers;
using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface ICartRepository
    {
        public Task<CartModel> getCartByPhone(string numberPhone);
        public Task addCart(CartModel cart, string numberPhone);
        public Task<string> updateCart(CartModel cart, string numberPhone);
        public Task deleteCart (string numberPhone);

    }
}
