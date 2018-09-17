using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate;

namespace RocketMonkey.Monkeynote.Notes.Infrastructure.EntityConfigurations
{
    public class NoteEntityTypeConfiguration : IEntityTypeConfiguration<Note>
    {
        public void Configure(EntityTypeBuilder<Note> builder)
        {
            builder.ToTable("notes");
            builder.HasKey(o => o.Id);

            builder.Ignore(o => o.DomainEvents);
            builder.Ignore(o => o.Tags);

            builder.Property(o => o.Id).ForSqlServerUseSequenceHiLo("noteseq");

            builder.Property(o => o.Title).IsRequired();
            builder.Property(o => o.Text).IsRequired();
        }
    }
}