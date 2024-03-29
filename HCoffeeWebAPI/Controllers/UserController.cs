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

        public UserController(IAccountRepository repo) 
        {
            accountRepo = repo;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            try
            {
                if(model.PhoneNumber == null)
                {
                    return BadRequest("Phone number not null");
                }
                var result = await accountRepo.LoginAsync(model);
                if(string.IsNullOrEmpty(result))
                {
                    return Unauthorized();
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
