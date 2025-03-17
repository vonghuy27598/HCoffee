using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace HCoffeeWebAPI.Data
{
    public class HCoffeeContext : IdentityDbContext<User>
    {
        public HCoffeeContext(DbContextOptions<HCoffeeContext> opt) : base(opt)
        {

        }
        #region DbSet
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<CategoryMenu> CategoryMenu { get; set; }
        public DbSet<Topping> Topping { get; set; }
        public DbSet<Banner> Banner { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<ListProductChoose> ListProductChooses { get; set; }
        public DbSet<Cart> Cart { get; set; }
        public DbSet<CartDetail> CartDetail { get; set; }
        public DbSet<ListProductInCart> ListProductInCart { get; set; }
        public DbSet<Notification> Notification { get; set; }
        public DbSet<RefreshToken> RefreshToken { get; set; }
        #endregion
    }
}
