using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate;

namespace RocketMonkey.Monkeynote.Notes.Infrastructure.EntityConfigurations
{
    public class NotebookEntityTypeConfiguration : IEntityTypeConfiguration<Notebook>
    {
        public void Configure(EntityTypeBuilder<Notebook> builder)
        {
            builder.ToTable("notebooks");
            builder.HasKey(o => o.Id);
            builder.Ignore(o => o.DomainEvents);
            builder.Property(o => o.Id).ForSqlServerUseSequenceHiLo("notebookseq");

            var navigation = builder.Metadata.FindNavigation(nameof(Notebook.Notes));
            navigation.SetPropertyAccessMode(PropertyAccessMode.Field);

            builder.Property<Guid>("UserId").UsePropertyAccessMode(PropertyAccessMode.Field);

            builder.Property(o => o.Title).IsRequired();
        }
    }
}