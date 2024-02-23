using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BannerController : ControllerBase
    {
        private readonly IBannerRepository _repo;

        public BannerController(IBannerRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBanner()
        {
            try
            {
                var listBanner = await _repo.GetAllBanner();
                return Ok(listBanner);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("{bannerId}")]
        public async Task<IActionResult> GetBannerById(int bannerId)
        {
            try
            {
                var banner = await _repo.GetBannerById(bannerId);
                if (banner == null)
                    return NotFound();
                return Ok(banner);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddBanner(BannerModel model)
        {
            try
            {
                await _repo.AddBanner(model);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{bannerId}")]
        public async Task<IActionResult> UpdateBanner(int bannerId, BannerModel model)
        {
            if (bannerId == model.BannerId)
            {
                try
                {
                    await _repo.UpdateBanner(bannerId, model);
                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return NotFound();
        }
        [HttpDelete("{bannerId}")]
        public async Task<IActionResult> DeleteBanner(int bannerId)
        {
            try
            {
                await _repo.DeleteBanner(bannerId);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
