using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.EntityFrameworkCore.Internal;
using RocketMonkey.Monkeynote.Notes.Api.Application.Dtos;

namespace RocketMonkey.Monkeynote.Notes.Api.Application.Queries
{
    public class NotesQueries : INotesQueries
    {
        private readonly string _connectionString;

        public NotesQueries(string connectionString)
        {
            if (string.IsNullOrWhiteSpace(connectionString))
            {
                throw new ArgumentException("message", nameof(connectionString));
            }

            _connectionString = connectionString;
        }

        public async Task<IEnumerable<NotebookDto>> GetNotebooksAsync(Guid userId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var notebookDictionary = new Dictionary<int, NotebookDto>();

                var sql = @"select nb.Id as notebookId, nb.Title as title, n.Id as noteId, n.Title as title, n.Text as [text]
                    from dbo.notebooks nb
                    inner join dbo.notes n ON n.NotebookId = nb.Id
                    where nb.UserId = @userId";

                // Todo: test if there is an exception when an user has zero notebooks
                var notebooks = await connection.QueryAsync<NotebookDto, NoteDto, NotebookDto>(
                    sql: sql,
                    map: (notebook, note) =>
                    {
                        if (!notebookDictionary.TryGetValue(notebook.NotebookId, out var notebookEntry))
                        {
                            notebookEntry = notebook;
                            notebookEntry.Notes = new List<NoteDto>();
                            notebookDictionary.Add(notebookEntry.NotebookId, notebookEntry);
                        }

                        notebookEntry.Notes.Add(note);
                        return notebookEntry;
                    },
                    param: new {userId},
                    splitOn: "noteId");
                    

                return notebooks.Distinct().ToList();
            }
        }
    }
}