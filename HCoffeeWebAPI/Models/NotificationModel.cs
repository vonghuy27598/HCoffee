namespace HCoffeeWebAPI.Models
{
    public class NotificationModel
    {
        public int NotifyId { get; set; }
        public string PhoneNumber { get; set; }
        public string TitleNotify { get; set; }
        public string BodyNotify { get; set; }
        public object DataBody { get; set; }
        public string ImageNotify { get; set; }
        public string IconNotify { get; set; }
        public string DeviceId { get; set; }
        public string TokenNotify { get; set; }
        public bool IsSeen { get; set; }
        public DateTime DateCreate { get; set; }
    }
}
