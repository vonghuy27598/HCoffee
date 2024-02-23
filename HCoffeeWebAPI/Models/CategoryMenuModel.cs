using System.ComponentModel.DataAnnotations;

namespace HCoffeeWebAPI.Models
{
    public class CategoryMenuModel
    {
        public int CateMenuId { get; set; }
        public string CateMenuName { get; set; }
        [MaxLength(100)]
        public string DetailCate { get; set; }
        public string ImageCate { get; set; }
    }
}
