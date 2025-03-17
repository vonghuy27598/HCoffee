using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HCoffeeWebAPI.Data
{
    [Table("RefreshToken")]
    public class RefreshToken
    {
        [Key]
        public Guid RefreshTokenId { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
        public string Token { get; set; } // RefreshToken
        public string JwtId { get; set; } // save id access token when created
        public bool IsUsed { get; set; }
        public DateTime IssuedAt { get; set; }
        public DateTime ExpiredAt { get; set; }

    }
}
