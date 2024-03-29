using System.ComponentModel.DataAnnotations;

namespace HCoffeeWebAPI.Models
{
    public class LoginModel
    {
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string DeviceId { get; set; }
        [Required]
        public string TokenNotify { get; set; }
    }
}
