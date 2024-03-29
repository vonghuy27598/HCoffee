using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HCoffeeWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class OrderOrderDetail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ListProductChooseIdChoose",
                table: "Topping",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "OrderDetail",
                columns: table => new
                {
                    OrderDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TotalPriceOrder = table.Column<double>(type: "float", nullable: false),
                    TotalQuantityOrder = table.Column<double>(type: "float", nullable: false),
                    TotalPriceShip = table.Column<double>(type: "float", nullable: false),
                    OrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetail", x => x.OrderDetailId);
                });

            migrationBuilder.CreateTable(
                name: "ListProductChoose",
                columns: table => new
                {
                    IdChoose = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    Size = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Quantity = table.Column<double>(type: "float", nullable: false),
                    TotalPrice = table.Column<double>(type: "float", nullable: false),
                    NoteProduct = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OrderDetailId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListProductChoose", x => x.IdChoose);
                    table.ForeignKey(
                        name: "FK_ListProductChoose_OrderDetail_OrderDetailId",
                        column: x => x.OrderDetailId,
                        principalTable: "OrderDetail",
                        principalColumn: "OrderDetailId");
                    table.ForeignKey(
                        name: "FK_ListProductChoose_Product_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Product",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    OrderId = table.Column<int>(type: "int", nullable: false),
                    OrderDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DeviceId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NoteOrder = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.OrderId);
                    table.ForeignKey(
                        name: "FK_Order_OrderDetail_OrderId",
                        column: x => x.OrderId,
                        principalTable: "OrderDetail",
                        principalColumn: "OrderDetailId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Topping_ListProductChooseIdChoose",
                table: "Topping",
                column: "ListProductChooseIdChoose");

            migrationBuilder.CreateIndex(
                name: "IX_ListProductChoose_OrderDetailId",
                table: "ListProductChoose",
                column: "OrderDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_ListProductChoose_ProductId",
                table: "ListProductChoose",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_Topping_ListProductChoose_ListProductChooseIdChoose",
                table: "Topping",
                column: "ListProductChooseIdChoose",
                principalTable: "ListProductChoose",
                principalColumn: "IdChoose");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Topping_ListProductChoose_ListProductChooseIdChoose",
                table: "Topping");

            migrationBuilder.DropTable(
                name: "ListProductChoose");

            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropTable(
                name: "OrderDetail");

            migrationBuilder.DropIndex(
                name: "IX_Topping_ListProductChooseIdChoose",
                table: "Topping");

            migrationBuilder.DropColumn(
                name: "ListProductChooseIdChoose",
                table: "Topping");
        }
    }
}
