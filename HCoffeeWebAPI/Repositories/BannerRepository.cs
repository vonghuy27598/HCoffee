using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Helpers;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace HCoffeeWebAPI.Repositories
{
    public class BannerRepository : IBannerRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;

        public BannerRepository(HCoffeeContext context, IMapper mapper) 
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task AddBanner(BannerModel model)
        {
            _context.Banner.Add(_mapper.Map<Banner>(model));
            await _context.SaveChangesAsync();
        }

        public async Task DeleteBanner(int bannerId)
        {
            var banner = await _context.Banner.SingleOrDefaultAsync(x => x.BannerId == bannerId);
            _context.Banner.Remove(banner);
            await _context.SaveChangesAsync();
        }

        public async Task<List<BannerModel>> GetAllBanner()
        {
            var listBanner = await _context.Banner.ToListAsync();
            return _mapper.Map<List<BannerModel>>(listBanner);
        }

        public async Task<BannerModel> GetBannerById(int bannerId)
        {
            var banner = await _context.Banner.SingleOrDefaultAsync(x => x.BannerId == bannerId);
            return _mapper.Map<BannerModel>(banner);
        }

        public async Task UpdateBanner(int bannerId, BannerModel model)
        {
            if (bannerId == model.BannerId)
            {
                _context.Banner.Update(_mapper.Map<Banner>(model));
                await _context.SaveChangesAsync();
            }
        }
    }
}
