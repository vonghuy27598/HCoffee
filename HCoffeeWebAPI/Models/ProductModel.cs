using System.ComponentModel.DataAnnotations;

namespace HCoffeeWebAPI.Models
{
    public class ProductModel
    {
        public int ProductId { get; set; }
        [MaxLength(100)]
        public string ProductName { get; set; }
        [MaxLength(int.MaxValue)]
        public string? Description { get; set; }
        [MaxLength(200)]
        public string ShortDescription { get; set; }
        public string ImageProduct { get; set; }
        [Range(0, double.MaxValue)]
        public double SmallPrice { get; set; }
        [Range(0, double.MaxValue)]
        public double MediumPrice { get; set; }
        [Range(0, double.MaxValue)]
        public double BigPrice { get; set; }
        [Range(0, double.MaxValue)]
        public double ReducedPrice { get; set; }
        [MaxLength(50)]
        public string UnitProduct { get; set; }
        public int ID_Cate { get; set; }
        public int[] ID_TypeTopping { get; set; }
    }
}
