using System.ComponentModel.DataAnnotations;

namespace HCoffeeWebAPI.Data
{
    public class Banner
    {
        [Key]
        [Required]
        public int BannerId { get; set; }
        [Required]
        public string BannerName { get; set; }
        [MaxLength(100)]
        public string DetailBanner { get; set; }
        public string ImageBanner { get; set; }
    }
}
