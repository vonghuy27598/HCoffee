using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface IAccountRepository
    {
        public Task<string> LoginAsync(LoginModel model);
    }
}
