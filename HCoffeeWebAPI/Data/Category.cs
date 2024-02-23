using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HCoffeeWebAPI.Data
{
    [Table("Category")]
    public class Category
    {
        [Key]
        [Required]
        public int CategoryId { get; set; }
        [Required]
        public string CateName { get; set; }
        [MaxLength(100)]
        public string DetailCate { get; set; }
        [MaxLength(100)]
        public string HeaderTitle { get; set; }
        public string HeaderBackground { get; set; }
        public string ImageCate { get; set; }

    }
}
