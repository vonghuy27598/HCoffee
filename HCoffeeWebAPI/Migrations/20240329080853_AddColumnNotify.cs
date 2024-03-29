using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HCoffeeWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddColumnNotify : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsSeen",
                table: "Notification",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsSeen",
                table: "Notification");
        }
    }
}
