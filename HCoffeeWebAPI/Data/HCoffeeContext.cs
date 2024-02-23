using Microsoft.EntityFrameworkCore;

namespace HCoffeeWebAPI.Data
{
    public class HCoffeeContext : DbContext
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
        #endregion
    }
}
