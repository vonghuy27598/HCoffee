using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface IToppingRepository
    {
        public Task<List<ToppingModel>> GetAllTopping();
        public Task<ToppingModel> GetToppingById(int toppingId);
        public Task<List<ToppingModel>> GetListTopping(int[] listIdTopping);
        public Task AddTopping(ToppingModel model);
        public Task UpdateTopping(int toppingId, ToppingModel model);
        public Task DeleteTopping(int toppingId);
    }
}
