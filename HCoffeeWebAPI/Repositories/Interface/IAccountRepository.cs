using HCoffeeWebAPI.Models;
using static HCoffeeWebAPI.Helpers.ResponseCode;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface IAccountRepository
    {
        public Task<TokenModel> LoginAsync(LoginModel model);
        public Task<DefaultResponse> RenewToken(TokenModel modelToken);
    }
}
