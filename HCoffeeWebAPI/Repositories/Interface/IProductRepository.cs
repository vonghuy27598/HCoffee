using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface IProductRepository
    {
        public Task<List<ProductModel>> GetAllProducts();
        public Task<ProductModel> GetProductById(int productId);
        public Task<int> AddProduct(ProductModel product);
        public Task UpdateProduct(int product_id, ProductModel product);
        public Task DeleteProduct(int product_id);
        public Task<List<ProductModel>> GetProductByIdCate(int idCate);
    }
}
