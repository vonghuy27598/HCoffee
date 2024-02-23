using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace HCoffeeWebAPI.Repositories
{
    public class ToppingRepository : IToppingRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;

        public ToppingRepository(HCoffeeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task AddTopping(ToppingModel model)
        {
            _context.Topping.AddAsync(_mapper.Map<Topping>(model));
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTopping(int toppingId)
        {
            var topping = await _context.Topping.SingleOrDefaultAsync(x => x.ToppingId == toppingId);
            _context.Topping.Remove(topping);
            await _context.SaveChangesAsync();
        }

        public async Task<List<ToppingModel>> GetAllTopping()
        {
            var listTopping = await _context.Topping.ToListAsync();
            return _mapper.Map<List<ToppingModel>>(listTopping);
        }

        public async Task<ToppingModel> GetToppingById(int toppingId)
        {
            var topping = await _context.Topping.SingleOrDefaultAsync(x => x.ToppingId == toppingId);
            return _mapper.Map<ToppingModel>(topping);
        }

        public async Task UpdateTopping(int toppingId, ToppingModel model)
        {
            if (toppingId == model.ToppingId)
            {
                _context.Topping.Update(_mapper.Map<Topping>(model));
                await _context.SaveChangesAsync();
            }
        }
    }
}
