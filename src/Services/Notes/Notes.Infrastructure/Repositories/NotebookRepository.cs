using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate;
using SharedKernel;

namespace RocketMonkey.Monkeynote.Notes.Infrastructure.Repositories
{
    public class NotebookRepository : IRepository<Notebook>
    {
        private readonly NotesContext _context;

        public IUnitOfWork UnitOfWork => _context;

        public NotebookRepository(NotesContext context)
        {
            _context = context;
        }

    }
}