using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoryMenuController : ControllerBase
    {
        private readonly ICategoryMenuRepository _repo;

        public CategoryMenuController(ICategoryMenuRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllMenu()
        {
            try
            {
                var listMenu = await _repo.GetAllMeNu();
                return Ok(listMenu);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("{idMenu}")]
        public async Task<IActionResult> GetMenuById(int idMenu)
        {
            try
            {
                var menu = await _repo.GetMeNuById(idMenu);
                if (menu == null)
                    return NotFound();
                return Ok(menu);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddMenu(CategoryMenuModel model)
        {
            try
            {
                await _repo.AddMenu(model);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{idMenu}")]
        public async Task<IActionResult> UpdateMenu(int idMenu, CategoryMenuModel model)
        {
            if (idMenu == model.CateMenuId)
            {
                try
                {
                    await _repo.UpdateMenu(idMenu, model);
                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return NotFound();
        }
        [HttpDelete("{idMenu}")]
        public async Task<IActionResult> DeleteMenu(int idMenu)
        {
            try
            {
                await _repo.DeleteMenu(idMenu);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
