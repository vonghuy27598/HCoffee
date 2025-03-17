using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HCoffeeWebAPI.Data
{
    [Table("Order")]
    public class Order
    {
        [Key]
        [Required]
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public string PhoneNumber {  get; set; }
        public string Address { get; set; }
        public string DeviceId { get; set; }
        public string NoteOrder {  get; set; }
        public int StatusCodeOrder { get; set; } // 101 pending; 102 delivery; 103 success; -1 error
        [ForeignKey("OrderId")]
        public List<OrderDetail> OrderDetail { get; set; }
    }
}
