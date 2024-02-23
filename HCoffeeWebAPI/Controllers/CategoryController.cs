using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _repo;

        public CategoryController(ICategoryRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            try
            {
                var listCate = await _repo.GetAllCategories();
                if (listCate != null)
                {
                    return Ok(listCate);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public async Task<IActionResult> GetCategoryById(int idCate)
        {
            try
            {
                var cate = await _repo.GetCategoryById(idCate);
                return Ok(cate);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public async Task<IActionResult> AddCategory(CategoryModel categoryModel)
        {
            try
            {
                await _repo.AddCategory(categoryModel);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{idCate}")]
        public async Task<IActionResult> UpdateCategory(int idCate, CategoryModel categoryModel)
        {
            if (idCate == categoryModel.CategoryId)
            {
                try
                {
                    await _repo.UpdateCategory(idCate, categoryModel);
                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return NotFound();
        }
        [HttpDelete("{idCate}")]
        public async Task<IActionResult> DeleteCategory(int idCate)
        {
            try
            {
                await _repo.DeleteCategory(idCate);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
