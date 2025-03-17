using HCoffeeWebAPI.Helpers;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IAccountRepository accountRepo;
        private ResponseCode response = new ResponseCode();
        public UserController(IAccountRepository repo)
        {
            accountRepo = repo;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            try
            {
                if (model.PhoneNumber == null)
                {
                    return BadRequest("Phone number not null");
                }
                if (model.PhoneNumber.Length == 11 && model.PhoneNumber.Substring(0, 2) == "84")
                {
                    model.PhoneNumber = model.PhoneNumber.Remove(0, 2).Insert(0, "0");
                }

                var result = await accountRepo.LoginAsync(model);
                if (string.IsNullOrEmpty(result.AccessToken) && string.IsNullOrEmpty(result.RefreshToken))
                {
                    return Unauthorized();
                }

                response._success.message = "Verify OTP Success";
                response._success.data = result;
                return Ok(response._success);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }

        }

        [HttpPost]
        public async Task<IActionResult> RenewToken(TokenModel model)
        {
            try
            {
                if (string.IsNullOrEmpty(model.AccessToken) || string.IsNullOrEmpty(model.RefreshToken))
                {
                    response._warning.message = "AccessToken and RefreshToken not null";
                    return BadRequest(response._warning);
                }
                var newToken = await accountRepo.RenewToken(model);
                if (newToken.resCode == 1)
                {
                    return Ok(newToken);
                }
                return BadRequest(newToken);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }
        }
    }
}
