using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SharedKernel;

namespace RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate
{
    public interface INotebookRepository : IRepository<Notebook>
    {
        Notebook Add(Notebook notebook);
        Task<Notebook> FindAsync(int id);
        //Task<IEnumerable<Notebook>> ListAsync(Guid userId);
        void Update(Notebook notebook);
    }
}