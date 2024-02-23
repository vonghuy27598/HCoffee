using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HCoffeeWebAPI.Data
{
    [Table("CategoryMenu")]
    public class CategoryMenu
    {
        [Key]
        [Required]
        public int CateMenuId { get; set; }
        [Required]
        public string CateMenuName { get; set; }
        [MaxLength(100)]
        public string DetailCate { get; set; }
        public string ImageCate { get; set; }
    }
}
