using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FirstMVCwebApp.Migrations
{
    public partial class StudentRegistrationDBWithImg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProfileImagePath",
                table: "FormData",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProfileImagePath",
                table: "FormData");
        }
    }
}
