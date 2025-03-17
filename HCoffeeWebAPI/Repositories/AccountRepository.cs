using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using static HCoffeeWebAPI.Helpers.ResponseCode;

namespace HCoffeeWebAPI.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;

        public AccountRepository(HCoffeeContext context, IMapper mapper, UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration)
        {
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }
        public async Task<TokenModel> LoginAsync(LoginModel model)
        {
            var checkUser = await _context.Users.SingleOrDefaultAsync(x => x.PhoneNumber == model.PhoneNumber);
            var jwtToken = GenerateToken(model.PhoneNumber, model.TokenNotify);
            var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);
            var refreshToken = GenerateRefreshToken();
            //save refreshToken to database
            var refreshTokenEntity = new RefreshToken
            {
                RefreshTokenId = Guid.NewGuid(),
                Token = refreshToken,
                IsUsed = false,
                JwtId = jwtToken.Id,
                ExpiredAt = DateTime.UtcNow.AddDays(7),
                IssuedAt = DateTime.UtcNow,
            };
            if (checkUser == null)
            {
                var user = new User
                {
                    UserName = model.PhoneNumber,
                    PhoneNumber = model.PhoneNumber,
                    DeviceId = model.DeviceId,
                    Address = "",
                    FirstName = "",
                    LastName = "",
                    FullName = "",
                    EmailAddress = "",
                    Avatar = "",
                    FacebookName = "",
                    TokenUser = "",
                    TokenNotify = model.TokenNotify,
                    GmailName = "",

                };
                refreshTokenEntity.UserId = user.Id;
                var signUp = await _userManager.CreateAsync(user, "@HCoffee" + model.PhoneNumber);
                if (!signUp.Succeeded)
                {
                    return new TokenModel
                    {
                        AccessToken = "",
                        RefreshToken = "",
                    };
                }
            }
            else
            {
                refreshTokenEntity.UserId = checkUser.Id;
            }

            var resultSignIn = await _signInManager.PasswordSignInAsync(model.PhoneNumber, "@HCoffee" + model.PhoneNumber, false, false);
            if (!resultSignIn.Succeeded)
            {
                return new TokenModel
                {
                    AccessToken = "",
                    RefreshToken = "",
                };
            }
            _context.RefreshToken.Add(refreshTokenEntity);
            await _context.SaveChangesAsync();
            return new TokenModel
            {
                AccessToken = accessToken,
                RefreshToken = refreshToken,
            };

        }

        public async Task<DefaultResponse> RenewToken(TokenModel modelToken)
        {
            var jwtTokenHandle = new JwtSecurityTokenHandler();
            var secretKeyBytes = Encoding.UTF8.GetBytes(_configuration["JWT:SecretKey"]);
            var responseCode = new DefaultResponse();
            responseCode.resCode = 0;
            var tokenValidateParam = new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidAudience = _configuration["JWT:ValidAudience"],
                ValidIssuer = _configuration["JWT:ValidIssuer"],
                IssuerSigningKey = new SymmetricSecurityKey(secretKeyBytes),
                ValidateLifetime = false,
                ClockSkew = TimeSpan.Zero
            };
            // check validate format
            var test = jwtTokenHandle.ReadJwtToken(modelToken.AccessToken);
            var tokenInVerify = jwtTokenHandle.ValidateToken(modelToken.AccessToken, tokenValidateParam, out var validatedToken);


            //check alg
            if (validatedToken is JwtSecurityToken jwtToken)
            {
                var result = jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha512Signature, StringComparison.InvariantCultureIgnoreCase);
                if (!result)
                {
                    responseCode.status = "Warning";
                    responseCode.message = "Invalid Token";
                    return responseCode;
                }
            }


            //check accessToken expried
            var jwtExpried = long.Parse(tokenInVerify.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp).Value);
            var exprieDate = ConverUnixTimeToDateTime(jwtExpried);
            if (exprieDate > DateTime.Now)
            {
                responseCode.status = "Warning";
                responseCode.message = "AccessToken has not expired";
                return responseCode;
            }

            // check refreshToken exist in database
            var checkToken = await _context.RefreshToken.FirstOrDefaultAsync(x => x.Token == modelToken.RefreshToken);
            if (checkToken == null)
            {
                responseCode.status = "Warning";
                responseCode.message = "RefreshToken doesn't exist";
                return responseCode;
            }

            // check refreshToken isUsed
            if (checkToken.IsUsed)
            {
                responseCode.status = "Warning";
                responseCode.message = "RefreshToken has been used";
                return responseCode;
            }

            //check AccessToken id == JwtId in RefreshToken
            var jwtId = tokenInVerify.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Jti).Value;
            if (checkToken.JwtId != jwtId)
            {
                responseCode.status = "Warning";
                responseCode.message = "Token dosen't match";
                return responseCode;
            }

            //update token
            //checkToken.IsUsed = true;


            // create new accessToken
            var numberPhone = tokenInVerify.Claims.FirstOrDefault(x => x.Type == ClaimTypes.MobilePhone).Value;
            var tokenNotify = tokenInVerify.Claims.FirstOrDefault(x => x.Type == "TokenNotify").Value;
            var newAccessToken = GenerateToken(numberPhone, tokenNotify);
            responseCode.status = "Success";
            responseCode.message = "Renew AccessToken Success";
            responseCode.resCode = 1;
            responseCode.data = new TokenModel
            {
                AccessToken = new JwtSecurityTokenHandler().WriteToken(newAccessToken),
                RefreshToken = modelToken.RefreshToken
            };
            return responseCode;
        }
        private DateTime ConverUnixTimeToDateTime(long unixTime)
        {
            var dateTimeInterval = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            dateTimeInterval.AddSeconds(unixTime).ToUniversalTime();
            return dateTimeInterval;
        }

        private JwtSecurityToken GenerateToken(string numberPhone, string tokenNotify)
        {
            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.MobilePhone, numberPhone),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Exp, DateTime.UtcNow.AddSeconds(20).ToString()),
                new Claim("TokenNotify", tokenNotify),

            };

            var authKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:SecretKey"]));

            //var tokenDescriptor = new SecurityTokenDescriptor
            //{
            //    Subject = new ClaimsIdentity(authClaims),
            //    Expires = DateTime.UtcNow.AddMinutes(60),
            //    Issuer = _configuration["JWT:ValidIssuer"],
            //    Audience = _configuration["JWT:ValidAudience"],
            //    SigningCredentials = new SigningCredentials(authKey, SecurityAlgorithms.HmacSha512Signature)
            //};
            //var tokenHandler = new JwtSecurityTokenHandler();
            //var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = new JwtSecurityToken(
              issuer: _configuration["JWT:ValidIssuer"],
              audience: _configuration["JWT:ValidAudience"],
              expires: DateTime.UtcNow.AddSeconds(10),
              claims: authClaims,
              signingCredentials: new SigningCredentials(authKey, SecurityAlgorithms.HmacSha512Signature)
            );
            return jwtToken;
        }


        private string GenerateRefreshToken()
        {
            var random = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(random);
                return Convert.ToBase64String(random);
            }
        }


    }
}

