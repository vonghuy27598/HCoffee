using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HCoffeeWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class CreateCart : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CartDetail",
                columns: table => new
                {
                    CartDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TotalPriceCart = table.Column<double>(type: "float", nullable: false),
                    TotalQuantityCart = table.Column<double>(type: "float", nullable: false),
                    TotalPriceShipCart = table.Column<double>(type: "float", nullable: false),
                    CartId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartDetail", x => x.CartDetailId);
                });

            migrationBuilder.CreateTable(
                name: "Cart",
                columns: table => new
                {
                    CartId = table.Column<int>(type: "int", nullable: false),
                    DateCreateCart = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DeviceId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cart", x => x.CartId);
                    table.ForeignKey(
                        name: "FK_Cart_CartDetail_CartId",
                        column: x => x.CartId,
                        principalTable: "CartDetail",
                        principalColumn: "CartDetailId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ListProductInCart",
                columns: table => new
                {
                    IdListInCart = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    ListToppingId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Size = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Quantity = table.Column<double>(type: "float", nullable: false),
                    TotalPrice = table.Column<double>(type: "float", nullable: false),
                    NoteProduct = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CartDetailId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListProductInCart", x => x.IdListInCart);
                    table.ForeignKey(
                        name: "FK_ListProductInCart_CartDetail_CartDetailId",
                        column: x => x.CartDetailId,
                        principalTable: "CartDetail",
                        principalColumn: "CartDetailId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ListProductInCart_CartDetailId",
                table: "ListProductInCart",
                column: "CartDetailId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cart");

            migrationBuilder.DropTable(
                name: "ListProductInCart");

            migrationBuilder.DropTable(
                name: "CartDetail");
        }
    }
}
