namespace HCoffeeWebAPI.Models
{
    public class OrderModel
    {
        public int? OrderId { get; set; }
        public DateTime? OrderDate { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string DeviceId { get; set; }
        public string NoteOrder { get; set; }
        public int StatusCodeOrder { get; set; } = 101;
        public List<OrderDetailModel> OrderDetail { get; set; }
    }
    public class OrderDetailModel
    {
        public int? OrderDetailId { get; set; }
        public double TotalPriceOrder { get; set; }
        public double TotalQuantityOrder { get; set; }
        public double TotalPriceShip { get; set; }
        public List<ListProductChooseModel> ListProductChooses { get; set; }
    }
    public class ListProductChooseModel
    {
        public int? IdChoose { get; set; }
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
