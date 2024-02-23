using AutoMapper;
using Microsoft.EntityFrameworkCore;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;

namespace HCoffeeWebAPI.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;

        public ProductRepository(HCoffeeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddProduct(ProductModel product)
        {
            _context.Products.Add(_mapper.Map<Product>(product));
            await _context.SaveChangesAsync();
            return product.ProductId;
        }

        public HCoffeeContext Get_context()
        {
            return _context;
        }
       
        public async Task<List<ProductModel>> GetAllProducts()
        {
            var listProducts = await _context.Products.ToListAsync();
            return _mapper.Map<List<ProductModel>>(listProducts);
        }

        public async Task<ProductModel> GetProductById(int productId)
        {
            var product = await _context.Products.SingleOrDefaultAsync(x => x.ProductId == productId);
            return _mapper.Map<ProductModel>(product);
        }

        public async Task<List<ProductModel>> GetProductByIdCate(int idCate)
        {
            var listProduct = await _context.Products.Where(x => x.ID_Cate == idCate).ToListAsync();
            return _mapper.Map<List<ProductModel>>(listProduct);
        }

        public async Task UpdateProduct(int product_id, ProductModel product)
        {
            if (product_id == product.ProductId)
            {
                //cách 1: Gán bằng tay (do param của model gửi lên với context của product không trùng nhau)
                var p = _context.Products.Find(product_id);
                p.ProductName = product.ProductName;
                p.UnitProduct = product.UnitProduct;
                p.ImageProduct = product.ImageProduct;
                p.ReducedPrice = product.ReducedPrice;
                p.SmallPrice = product.SmallPrice;
                p.MediumPrice = product.MediumPrice;
                p.BigPrice = product.BigPrice;
                p.Description = product.Description;
                p.ShortDescription = product.ShortDescription;
                p.ID_TypeTopping = product.ID_TypeTopping;
                _context.Products.Update(p);
                await _context.SaveChangesAsync();


                //cách 2: dùng Mapper (do param của model gửi lên với context của product trùng nhau)
                //var newProduct = _context.Products.Update(_mapper.Map<Product>(product));
                //await _context.SaveChangesAsync();
            }
        }
        public async Task DeleteProduct(int product_id)
        {
            var product = await _context.Products.SingleOrDefaultAsync(x => x.ProductId == product_id);
            if (product != null)
            {
                _context.Remove(product);
                await _context.SaveChangesAsync();
            }
        }

    }
 }
