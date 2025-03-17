namespace HCoffeeWebAPI.Models
{
    public class CacheModel
    {
        public string key { get; set; }
        public object data { get;set; }
        public DateTime exprie { get; set; }
    }
}
