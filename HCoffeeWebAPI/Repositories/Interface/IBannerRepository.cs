using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface IBannerRepository
    {
        public Task<List<BannerModel>> GetAllBanner();
        public Task<BannerModel> GetBannerById(int bannerId);
        public Task AddBanner(BannerModel model);
        public Task UpdateBanner(int bannerId, BannerModel model);
        public Task DeleteBanner(int bannerId);
    }
}
