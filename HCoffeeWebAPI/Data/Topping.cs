using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HCoffeeWebAPI.Data
{
    [Table("Topping")]
    public class Topping
    {
        [Key]
        public int ToppingId { get; set; }
        [MaxLength(100)]
        public string ToppingName { get; set; }
        [MaxLength(int.MaxValue)]
        public string? Description { get; set; }
        public string ImageTopping { get; set; }
        [Range(0, double.MaxValue)]
        public double Price { get; set; }
        [Range(0, double.MaxValue)]
        public double ReducedPrice { get; set; }
        [MaxLength(50)]
        public string UnitProduct { get; set; }
        public int ID_Cate { get; set; }
    }
}
