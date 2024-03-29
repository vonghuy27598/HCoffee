using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HCoffeeWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddColumnOrder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StatusCodeOrder",
                table: "Order",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StatusCodeOrder",
                table: "Order");
        }
    }
}
