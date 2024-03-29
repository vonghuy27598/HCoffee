using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HCoffeeWebAPI.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;

        public AccountRepository(HCoffeeContext context, IMapper mapper, UserManager<User> userManager , SignInManager<User> signInManager, IConfiguration configuration) 
        {
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }
        public async Task<string> LoginAsync(LoginModel model)
        {
            var checkUser = await _context.Users.SingleOrDefaultAsync(x => x.PhoneNumber == model.PhoneNumber);
            if(checkUser == null)
            {
                var user = new User
                {
                    UserName = model.PhoneNumber,
                    PhoneNumber = model.PhoneNumber,
                    DeviceId = model.DeviceId,
                    Address="",
                    FirstName="",
                    LastName ="",
                    FullName ="",
                    EmailAddress = "",
                    Avatar = "",
                    FacebookName="",
                    TokenUser = "",
                    TokenNotify =model.TokenNotify,
                    GmailName="",

                };
                var signUp = await _userManager.CreateAsync(user,"@HCoffee"+model.PhoneNumber);
                if (!signUp.Succeeded)
                {
                    return String.Empty;
                }
            }
            var resultSignIn = await _signInManager.PasswordSignInAsync(model.PhoneNumber, "@HCoffee" + model.PhoneNumber, false,false);
            if (!resultSignIn.Succeeded)
            {
                return String.Empty;
            }

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.MobilePhone, model.PhoneNumber),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("TokenNotify", model.TokenNotify)
            };

            var authKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:SecretKey"]));
            var token = new JwtSecurityToken(
              issuer: _configuration["JWT:ValidIssuer"],
              audience: _configuration["JWT:ValidAudience"],
              expires: DateTime.Now.AddDays(1),
              claims: authClaims,
              signingCredentials: new SigningCredentials(authKey, SecurityAlgorithms.HmacSha512Signature)
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
            
        }
    }
}
