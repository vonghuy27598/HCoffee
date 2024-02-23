using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface ICategoryRepository
    {
        public Task<List<CategoryModel>> GetAllCategories();
        public Task<CategoryModel> GetCategoryById(int idCate);
        public Task UpdateCategory(int idCate, CategoryModel category);
        public Task DeleteCategory(int idCate);
        public Task AddCategory(CategoryModel category);
    }
}
