using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace HCoffeeWebAPI.Repositories
{
    public class CartRepository : ICartRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;

        public CartRepository(HCoffeeContext context, IMapper mapper) 
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> addCart(CartModel cart, string numberPhone)
        {
            _context.Cart.Add(_mapper.Map<Cart>(cart));
            await _context.SaveChangesAsync();
            return cart.CartId;
        }

        public async Task deleteCart(string numberPhone)
        {
            var checkCart = _context.Cart.SingleOrDefault(x => x.PhoneNumber == numberPhone);
            if(checkCart != null) 
            {
                _context.Cart.Remove(checkCart);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<CartModel> getCartByPhone(string numberPhone)
        {
            var cart = await _context.Cart.SingleOrDefaultAsync(x=>x.PhoneNumber == numberPhone);
            return _mapper.Map<CartModel>(cart);
        }

        public async Task updateCart(CartModel cart, string numberPhone)
        {
            if(cart.PhoneNumber == numberPhone)
            {
                _context.Cart.Update(_mapper.Map<Cart>(cart));
                await _context.SaveChangesAsync();
            }
        }
    }
}
