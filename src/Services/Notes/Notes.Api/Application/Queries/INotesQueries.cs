using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RocketMonkey.Monkeynote.Notes.Api.Application.Dtos;

namespace RocketMonkey.Monkeynote.Notes.Api.Application.Queries
{
    public interface INotesQueries
    {
        Task<IEnumerable<NotebookDto>> GetNotebooksAsync(Guid userId);
    }
}