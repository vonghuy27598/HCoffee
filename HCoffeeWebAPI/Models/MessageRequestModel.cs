namespace HCoffeeWebAPI.Models
{
    public class MessageRequestModel
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public string DeviceToken { get; set; }
        public object data {  get; set; }
    }
}
