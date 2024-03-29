namespace HCoffeeWebAPI.Models
{
    public class CartModel
    {
        public int CartId { get; set; }
        public DateTime DateCreateCart { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string DeviceId { get; set; }
        public CartDetailModel CartDetail { get; set; }
    }
    public class CartDetailModel
    {
        public int CartDetailId { get; set; }
        public double TotalPriceCart { get; set; }
        public double TotalQuantityCart { get; set; }
        public double TotalPriceShipCart { get; set; }
        public int CartId { get; set; }
        public List<ListProductInCartModel> ListProductInCart { get; set; }
    }

    public class ListProductInCartModel
    { 
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
