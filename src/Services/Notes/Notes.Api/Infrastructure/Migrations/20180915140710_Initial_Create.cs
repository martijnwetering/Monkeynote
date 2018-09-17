using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RocketMonkey.Monkeynote.Notes.Api.Infrastructure.Migrations
{
    public partial class Initial_Create : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateSequence(
                name: "notebookseq",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "noteseq",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "tagseq",
                incrementBy: 10);

            migrationBuilder.CreateTable(
                name: "notebooks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Title = table.Column<string>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_notebooks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tags",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tags", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "notes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Title = table.Column<string>(nullable: false),
                    Text = table.Column<string>(nullable: false),
                    NotebookId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_notes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_notes_notebooks_NotebookId",
                        column: x => x.NotebookId,
                        principalTable: "notebooks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "notetags",
                columns: table => new
                {
                    NoteId = table.Column<int>(nullable: false),
                    TagId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_notetags", x => new { x.NoteId, x.TagId });
                    table.ForeignKey(
                        name: "FK_notetags_notes_NoteId",
                        column: x => x.NoteId,
                        principalTable: "notes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_notetags_tags_TagId",
                        column: x => x.TagId,
                        principalTable: "tags",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_notes_NotebookId",
                table: "notes",
                column: "NotebookId");

            migrationBuilder.CreateIndex(
                name: "IX_notetags_TagId",
                table: "notetags",
                column: "TagId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "notetags");

            migrationBuilder.DropTable(
                name: "notes");

            migrationBuilder.DropTable(
                name: "tags");

            migrationBuilder.DropTable(
                name: "notebooks");

            migrationBuilder.DropSequence(
                name: "notebookseq");

            migrationBuilder.DropSequence(
                name: "noteseq");

            migrationBuilder.DropSequence(
                name: "tagseq");
        }
    }
}
