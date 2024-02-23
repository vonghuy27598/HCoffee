using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public ProductController(IProductRepository repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllProduct()
        {
            try
            {
                return Ok(await _repo.GetAllProducts());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetProductById(int productId)
        {
            try
            {
                var product = await _repo.GetProductById(productId);
                return product != null ? Ok(product) : NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(ProductModel productsModel)
        {
            try
            {
                await _repo.AddProduct(productsModel);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Cập nhật sản phẩm theo ID
        /// </summary>
        /// <param name="productId"> Mã sản phẩm</param>
        /// <returns></returns>
        [HttpPut("{productId}")]
        public async Task<IActionResult> UpdateProductById(int productId, ProductModel model)
        {
            if (productId == model.ProductId)
            {
                try
                {
                    await _repo.UpdateProduct(productId, model);
                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return NotFound();
        }
        /// <summary>
        /// Xóa sản phẩm theo ID
        /// </summary>
        /// <param name="productId"> Mã sản phẩm</param>
        /// <returns></returns>
        [HttpDelete("{productId}")]
        public async Task<IActionResult> DeleteProduct(int productId)
        {
            await _repo.DeleteProduct(productId);
            return Ok();
        }

        [HttpGet("{idCate}")]
        public async Task<IActionResult> GetProductByCate(int idCate)
        {
            try
            {
                return Ok(await _repo.GetProductByIdCate(idCate));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
