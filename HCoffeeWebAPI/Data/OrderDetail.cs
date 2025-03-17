
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HCoffeeWebAPI.Data
{
    [Table("OrderDetail")]
    public class OrderDetail
    {
        [Key]
        [Required]
        public int OrderDetailId { get; set; }
        public double TotalPriceOrder { get; set; }
        public double TotalQuantityOrder { get; set; }
        public double TotalPriceShip { get; set; }
        [ForeignKey("OrderDetailId")]
        public List<ListProductChoose> ListProductChooses { get; set; }
    }
    public class ListProductChoose
    {
        [Key]
        [Required]
        public int IdChoose { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int CategoryId { get; set; }
        public List<int> ListToppingId {  get; set; }
        public string Size { get; set; }
        public double Quantity { get; set; }
        public double TotalPrice { get; set; }
        public string NoteProduct { get; set; }
    }

}
