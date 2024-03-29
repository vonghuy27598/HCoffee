using HCoffeeWebAPI.Helpers;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository _cartRepo;

        public CartController(ICartRepository cartRepo) 
        {
            _cartRepo = cartRepo;
        }

        [HttpGet("numberPhone")]
        [Authorize]
        public async Task<IActionResult> GetCartByPhone(string phoneNumber)
        {
            try
            {
                if (phoneNumber == null)
                {
                    return NotFound(new ResponseCode.NotFound().message = "PhoneNumber not null");
                }
                var cart = await _cartRepo.getCartByPhone(phoneNumber);
                if(cart != null)
                    return Ok(cart);
                var res = new ResponseCode.NotFound();
                res.message = "Not Fond Cart";
                return NotFound(res);
            } catch (Exception ex)
            {
                return BadRequest(new ResponseCode.Error().message = ex.Message);
            }
        }

        [HttpPost("numberPhone")]
        [Authorize]
        public async Task<IActionResult> addCart(CartModel cartModel, string numberPhone)
        {
            try
            {
                if(numberPhone != null)
                {
                    if(cartModel.PhoneNumber == numberPhone)
                    {
                        var cartId = await _cartRepo.addCart(cartModel, numberPhone);
                        var res = new ResponseCode.Success();
                        res.message = "Add Cart success";
                        res.data = cartId;
                        return Ok(res);
                    }
                    return BadRequest(new ResponseCode.Warning().message = "PhoneNumber unlike");
                }
                return BadRequest(new ResponseCode.Warning().message = "PhoneNumber not null");
            }
            catch (Exception ex)
            {
                return BadRequest(new ResponseCode.Error().message = ex.Message);
            }
        }

        [HttpPut("numberPhone")]
        [Authorize]
        public async Task<IActionResult> updateCart(CartModel cartModel, string numberPhone)
        {
            try
            {
                if (numberPhone != null)
                {
                    if (cartModel.PhoneNumber == numberPhone)
                    {
                        await _cartRepo.updateCart(cartModel, numberPhone);
                        var res = new ResponseCode.Success();
                        res.message = "Update Cart success";
                        res.data = cartModel;
                        return Ok(res);
                    }
                    return BadRequest(new ResponseCode.Warning().message = "PhoneNumber unlike");
                }
                return BadRequest(new ResponseCode.Warning().message = "PhoneNumber not null");
            }
            catch (Exception ex)
            {
                return BadRequest(new ResponseCode.Error().message = ex.Message);
            }
        }
    }
}
