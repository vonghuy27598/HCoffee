using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ToppingController : ControllerBase
    {
        private readonly IToppingRepository _repo;

        public ToppingController(IToppingRepository repo) 
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllTopping()
        {
            try
            {
                var listTopping = await _repo.GetAllTopping();
                return Ok(listTopping);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost]
        public async Task<IActionResult> GetListTopping(int[] listIdTopping)
        {
            try
            {
                var listTopping = await _repo.GetListTopping(listIdTopping);
                return Ok(listTopping);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("{toppingId}")]
        public async Task<IActionResult> GetToppingById(int toppingId)
        {
            try
            {
                var topping = await _repo.GetToppingById(toppingId);
                if (topping == null)
                    return NotFound();
                return Ok(topping);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddTopping(ToppingModel model)
        {
            try
            {
                await _repo.AddTopping(model);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{toppingId}")]
        public async Task<IActionResult> UpdateTopping(int toppingId, ToppingModel model)
        {
            if (toppingId == model.ToppingId)
            {
                try
                {
                    await _repo.UpdateTopping(toppingId, model);
                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return NotFound();
        }
        [HttpDelete("{toppingId}")]
        public async Task<IActionResult> DeleteTopping(int toppingId)
        {
            try
            {
                await _repo.DeleteTopping(toppingId);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
