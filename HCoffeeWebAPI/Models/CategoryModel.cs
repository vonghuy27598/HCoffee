using System.ComponentModel.DataAnnotations;

namespace HCoffeeWebAPI.Models
{
    public class CategoryModel
    {
        public int CategoryId { get; set; }
        public string CateName { get; set; }
        [MaxLength(100)]
        public string DetailCate { get; set; }
        [MaxLength(100)]
        public string HeaderTitle { get; set; }
        public string HeaderBackground { get; set; }
        public string ImageCate { get; set; }
    }
}
