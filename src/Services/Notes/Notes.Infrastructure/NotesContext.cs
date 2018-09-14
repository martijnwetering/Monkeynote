using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate;
using RocketMonkey.Monkeynote.Notes.Infrastructure.EntityConfigurations;
using SharedKernel;

namespace RocketMonkey.Monkeynote.Notes.Infrastructure
{
    public class NotesContext : DbContext, IUnitOfWork
    {
        public const string DEFAULT_SCHEMA = "notes";

        public DbSet<Notebook> Notebooks { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Tag> Tags { get; set; }

        public NotesContext(DbContextOptions<NotesContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new NotebookEntityTypeConfiguration());
            builder.ApplyConfiguration(new NoteEntityTypeConfiguration());
            builder.ApplyConfiguration(new TagEntityTypeConfiguration());
            builder.ApplyConfiguration(new NoteTagConfiguration());
        }

        public async Task<bool> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            await base.SaveChangesAsync();

            return true;
        }
    }
}
