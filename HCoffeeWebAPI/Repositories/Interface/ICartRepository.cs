using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface ICartRepository
    {
        public Task<CartModel> getCartByPhone(string numberPhone);
        public Task<int> addCart(CartModel cart, string numberPhone);
        public Task updateCart(CartModel cart, string numberPhone);
        public Task deleteCart (string numberPhone);

    }
}
