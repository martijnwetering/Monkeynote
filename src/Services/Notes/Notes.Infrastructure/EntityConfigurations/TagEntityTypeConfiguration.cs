using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate;

namespace RocketMonkey.Monkeynote.Notes.Infrastructure.EntityConfigurations
{
    public class TagEntityTypeConfiguration : IEntityTypeConfiguration<Tag>
    {
        public void Configure(EntityTypeBuilder<Tag> builder)
        {
            builder.ToTable("tags");
            builder.HasKey(o => o.Id);
            builder.Ignore(o => o.DomainEvents);
            builder.Property(o => o.Id).ForSqlServerUseSequenceHiLo("tagseq");

            builder.Property(o => o.Name)
                .IsRequired();
        }
    }
}