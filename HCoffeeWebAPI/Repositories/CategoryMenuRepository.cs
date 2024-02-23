using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace HCoffeeWebAPI.Repositories
{
    public class CategoryMenuRepository : ICategoryMenuRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;

        public CategoryMenuRepository(HCoffeeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task AddMenu(CategoryMenuModel model)
        {
            _context.CategoryMenu.AddAsync(_mapper.Map<CategoryMenu>(model));
            await _context.SaveChangesAsync();
        }

        public async Task DeleteMenu(int idMenu)
        {
            var menu = await _context.CategoryMenu.SingleOrDefaultAsync(x => x.CateMenuId == idMenu);
            _context.CategoryMenu.Remove(menu);
            await _context.SaveChangesAsync();
        }

        public async Task<List<CategoryMenuModel>> GetAllMeNu()
        {
            var listMenu = await _context.CategoryMenu.ToListAsync();
            return _mapper.Map<List<CategoryMenuModel>>(listMenu);
        }

        public async Task<CategoryMenuModel> GetMeNuById(int idMenu)
        {
            var menu = await _context.CategoryMenu.SingleOrDefaultAsync(x => x.CateMenuId == idMenu);
            return _mapper.Map<CategoryMenuModel>(menu);
        }

        public async Task UpdateMenu(int idMenu, CategoryMenuModel model)
        {
            if (idMenu == model.CateMenuId)
            {
                _context.CategoryMenu.Update(_mapper.Map<CategoryMenu>(model));
                await _context.SaveChangesAsync();
            }
        }
    }
}
