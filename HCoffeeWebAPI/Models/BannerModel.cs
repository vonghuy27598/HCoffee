using System.ComponentModel.DataAnnotations;

namespace HCoffeeWebAPI.Models
{
    public class BannerModel
    {
        public int BannerId { get; set; }
        public string BannerName { get; set; }
        [MaxLength(100)]
        public string DetailBanner { get; set; }
        public string ImageBanner { get; set; }
    }
}
