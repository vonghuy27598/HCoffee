using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HCoffeeWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class CreateNotify : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Notification",
                columns: table => new
                {
                    NotifyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TitleNotify = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BodyNotify = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataBody = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageNotify = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IconNotify = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DeviceId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TokenNotify = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateCreate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notification", x => x.NotifyId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Notification");
        }
    }
}
