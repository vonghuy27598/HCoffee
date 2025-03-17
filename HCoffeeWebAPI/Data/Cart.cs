using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HCoffeeWebAPI.Data
{
    [Table("Cart")]
    public class Cart
    {
        [Key]
        [Required]
        public int CartId { get; set; }
        public DateTime DateCreateCart { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
       
        public string DeviceId { get; set; }

        [ForeignKey("CartId")]
        public List<CartDetail> CartDetail { get; set; }
    }

    [Table("CartDetail")]
    public class CartDetail
    {
        [Key]
        [Required]
        public int CartDetailId { get; set; }
        public double TotalPriceCart { get; set; }
        public double TotalQuantityCart { get; set; }
        public double TotalPriceShipCart { get; set; }
        [ForeignKey("CartDetailId")]
        public List<ListProductInCart> ListProductInCart { get; set; }
    }

    [Table("ListProductInCart")]
    public class ListProductInCart
    {
        [Key]
        [Required]
        public int IdListInCart { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int CategoryId { get; set; }
        public List<int> ListToppingId { get; set; }
        public string Size { get; set; }
        public double Quantity { get; set; }
        public double TotalPrice { get; set; }
        public string NoteProduct { get; set; }
       
    }
}
