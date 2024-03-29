using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace HCoffeeWebAPI.Data
{
    [Table("User")]
    public class User: IdentityUser
    {
        [Key]
        [Required]
        public int UserId { get; set; }
        [MaxLength(50)]
        public string FirstName { get; set; } = null;
        [MaxLength(50)]
        public string LastName { get; set; } = null;
        [MaxLength(100)]
        public string FullName { get; set; } = null;
        [MaxLength(int.MaxValue)]
        public string Address { get; set; } = null;
        [MaxLength(10)]
        [Phone]
        public string PhoneNumber { get; set; } = null;
        [EmailAddress]
        [MaxLength(50)]
        public string EmailAddress { get; set; } = null;
        public bool Sex { get; set; }
        public DateTime BirthDay {  get; set; }
        public string Avatar {  get; set; } = null;
        public string DeviceId {  get; set; } = null;
        public string TokenUser { get; set; } = null;
        public string TokenNotify {  get; set; } = null; 
        public bool IsFacebook { get; set; }  = false;
        public string FacebookName { get; set; } = null;
        public bool isGmail { get; set; } = false;
        public string GmailName { get; set; } = null;
    }
}
