using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HCoffeeWebAPI.Data
{
    [Table("Notification")]
    public class Notification
    {
        [Key]
        [Required]
        public int NotifyId { get; set; }
        public string PhoneNumber { get; set; }
        public string TitleNotify { get;set; }
        public string BodyNotify { get; set; }
        public string DataBody { get; set; }
        public string ImageNotify { get; set; }
        public string IconNotify { get;set; }
        public string DeviceId { get; set; }
        public string TokenNotify { get;set; }
        public bool IsSeen { get; set; }
        public DateTime DateCreate {  get; set; }
    }
}
