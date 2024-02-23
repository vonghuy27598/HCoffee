using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface ICategoryMenuRepository
    {
        public Task<List<CategoryMenuModel>> GetAllMeNu();
        public Task<CategoryMenuModel> GetMeNuById(int idMenu);
        public Task AddMenu(CategoryMenuModel model);
        public Task UpdateMenu(int idMenu, CategoryMenuModel model);
        public Task DeleteMenu(int idMenu);
    }
}
