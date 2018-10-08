using Microsoft.EntityFrameworkCore.Migrations;

namespace RocketMonkey.Monkeynote.Notes.Api.Infrastructure.Migrations
{
    public partial class Added_IsDefaultNotebook_Column_To_Notebook : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDefaultNotebook",
                table: "notebooks",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDefaultNotebook",
                table: "notebooks");
        }
    }
}
