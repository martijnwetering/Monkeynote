using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate;

namespace RocketMonkey.Monkeynote.Notes.Infrastructure.EntityConfigurations
{
    public class NoteTagConfiguration : IEntityTypeConfiguration<NoteTag>
    {
        public void Configure(EntityTypeBuilder<NoteTag> builder)
        {
            builder.ToTable("notetags");
            builder.HasKey(o => new { noteId = o.NoteId, o.TagId });

            builder.HasOne(o => o.Note)
                .WithMany("NoteTags");

            builder.HasOne(o => o.Tag)
                .WithMany("NoteTags");
        }
    }
}