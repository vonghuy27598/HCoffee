using HCoffeeWebAPI.Helpers;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository _cartRepo;
        private ResponseCode response = new ResponseCode();
        public CartController(ICartRepository cartRepo)
        {
            _cartRepo = cartRepo;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetCartByPhone(string phoneNumber)
        {
            try
            {
                if (phoneNumber == null)
                {
                    response._notFound.message = "PhoneNumber not null";
                    return NotFound(response._notFound);
                }
                var cart = await _cartRepo.getCartByPhone(phoneNumber);
                if (cart != null)
                {
                    response._success.data = cart;
                    return Ok(response._success);
                }
                response._notFound.message = "Not Found Cart";
                return NotFound(response._notFound);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> addCart(CartModel cartModel, string numberPhone)
        {
            try
            {
                if (numberPhone != null)
                {
                    if (cartModel.PhoneNumber == numberPhone)
                    {
                        await _cartRepo.addCart(cartModel, numberPhone);
                        response._success.message = "Add Cart success";
                        return Ok(response._success);
                    }
                    response._warning.message = "PhoneNumber unlike";
                    return BadRequest(response._warning);
                }
                response._warning.message = "PhoneNumber not null";
                return BadRequest(response._warning);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> updateCart(CartModel cartModel, string numberPhone)
        {
            try
            {
                if (numberPhone != null)
                {
                    if (cartModel.PhoneNumber == numberPhone)
                    {
                        var result = await _cartRepo.updateCart(cartModel, numberPhone);
                        if (result == "Success")
                        {
                            response._success.message = "Update Cart success";
                            response._success.data = cartModel;
                            return Ok(response._success);
                        }
                        response._warning.message = "Not Found Cart";
                        return BadRequest(response._warning);
                    }
                    response._warning.message = "PhoneNumber unlike";
                    return BadRequest(response._warning);
                }
                response._warning.message = "PhoneNumber not null";
                return BadRequest(response._warning);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }
        }
        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> deleteCart(string numberPhone)
        {
            try
            {
                if (string.IsNullOrEmpty(numberPhone))
                {
                    response._notFound.message = "Not found cart";
                    return NotFound(response._notFound);
                }
                await _cartRepo.deleteCart(numberPhone);
                response._success.message = "Delete cart success";
                return Ok(response._success);
            }
            catch (Exception ex)
            {

                response._error.message = ex.Message;
                return BadRequest(response._error);
            }
        }


    }
}
