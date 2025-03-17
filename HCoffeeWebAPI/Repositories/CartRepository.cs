using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Helpers;
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
        public async Task addCart(CartModel cart, string numberPhone)
        {
            cart.DateCreateCart = DateTime.Now;
            _context.Cart.Add(_mapper.Map<Cart>(cart));
            await _context.SaveChangesAsync();
        }

        public async Task deleteCart(string numberPhone)
        {
            var checkCart = _context.Cart.Include(x => x.CartDetail).ThenInclude(x => x.ListProductInCart).Where(x => x.PhoneNumber == numberPhone).ToList();
            var res = new ResponseCode();
            if (checkCart != null)
            {
                _context.Cart.RemoveRange(checkCart);
                await _context.SaveChangesAsync();
                res._success.message = "success";
            }
        }

        public async Task<CartModel> getCartByPhone(string numberPhone)
        {
            var cart = await _context.Cart.Include(x => x.CartDetail).ThenInclude(x => x.ListProductInCart).SingleOrDefaultAsync(x => x.PhoneNumber == numberPhone);
            return _mapper.Map<CartModel>(cart);
        }

        public async Task<string> updateCart(CartModel cart, string numberPhone)
        {
            if (cart.PhoneNumber == numberPhone)
            {
                //check exist cart
                var checkCart = _context.Cart.Include(x => x.CartDetail).ThenInclude(x => x.ListProductInCart).FirstOrDefault(x => x.PhoneNumber == numberPhone);
                if (checkCart != null)
                {
                    checkCart.DeviceId = cart.DeviceId;
                    checkCart.PhoneNumber = cart.PhoneNumber;
                    checkCart.Address = cart.Address;
                    checkCart.DateCreateCart = DateTime.Now;
                    checkCart.CartDetail[0].TotalPriceCart = cart.CartDetail[0].TotalPriceCart;
                    checkCart.CartDetail[0].TotalQuantityCart = cart.CartDetail[0].TotalQuantityCart;
                    checkCart.CartDetail[0].TotalPriceShipCart = cart.CartDetail[0].TotalPriceShipCart;
                    checkCart.CartDetail[0].ListProductInCart = [];
                    foreach (var item in cart.CartDetail[0].ListProductInCart)
                    {
                        checkCart.CartDetail[0].ListProductInCart.Add(_mapper.Map<ListProductInCart>(item));
                    }
                    _context.Cart.Update(_mapper.Map<Cart>(checkCart));
                    await _context.SaveChangesAsync();
                    return "Success";
                }

            }
            return "Not Found";
        }
    }
}
