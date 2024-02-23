using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HCoffeeWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class DbInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Banner",
                columns: table => new
                {
                    BannerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BannerName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DetailBanner = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    ImageBanner = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Banner", x => x.BannerId);
                });

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CateName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DetailCate = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    HeaderTitle = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    HeaderBackground = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageCate = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "CategoryMenu",
                columns: table => new
                {
                    CateMenuId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CateMenuName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DetailCate = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    ImageCate = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryMenu", x => x.CateMenuId);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", maxLength: 2147483647, nullable: true),
                    ShortDescription = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    ImageProduct = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SmallPrice = table.Column<double>(type: "float", nullable: false),
                    MediumPrice = table.Column<double>(type: "float", nullable: false),
                    BigPrice = table.Column<double>(type: "float", nullable: false),
                    ReducedPrice = table.Column<double>(type: "float", nullable: false),
                    UnitProduct = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ID_Cate = table.Column<int>(type: "int", nullable: false),
                    ID_TypeTopping = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Topping",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ToppingName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", maxLength: 2147483647, nullable: true),
                    ImageTopping = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    ReducedPrice = table.Column<double>(type: "float", nullable: false),
                    UnitProduct = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ID_Cate = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Topping", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Banner");

            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropTable(
                name: "CategoryMenu");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "Topping");
        }
    }
}
