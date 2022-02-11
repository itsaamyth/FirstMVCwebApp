using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FirstMVCwebApp.Migrations
{
    public partial class RegistrationForm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FormData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<int>(type: "int", nullable: false),
                    PermanentAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CurrentAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UgCourse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Stream = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TwelfthMarks = table.Column<int>(type: "int", nullable: false),
                    TenthMarks = table.Column<int>(type: "int", nullable: false),
                    StudentBio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormData", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FormData");
        }
    }
}
