using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace HCoffeeWebAPI.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;

        public CategoryRepository(HCoffeeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task AddCategory(CategoryModel category)
        {
            _context.Categories.Add(_mapper.Map<Category>(category));
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCategory(int idCate)
        {
            var cate = await _context.Categories.SingleOrDefaultAsync(x => x.CategoryId == idCate);
            if (cate != null)
            {
                _context.Categories.Remove(cate);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<CategoryModel>> GetAllCategories()
        {
            var listCate = await _context.Categories.ToListAsync();
            return _mapper.Map<List<CategoryModel>>(listCate);
        }

        public async Task<CategoryModel> GetCategoryById(int idCate)
        {
            var cate = await _context.Categories.FindAsync(idCate);
            return _mapper.Map<CategoryModel>(cate);
        }

        public async Task UpdateCategory(int idCate, CategoryModel category)
        {
            if (idCate == category.CategoryId)
            {
                _context.Categories.Update(_mapper.Map<Category>(category));
                await _context.SaveChangesAsync();
            }
        }

    }
}
