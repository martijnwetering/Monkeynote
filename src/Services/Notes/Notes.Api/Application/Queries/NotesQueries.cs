using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.EntityFrameworkCore.Query.Expressions;
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
                var noteDictionary = new Dictionary<int, NoteDto>();

                var sql = @"select nb.Id as notebookId, nb.Title as title, n.Id as noteId, n.Title as title, n.Text as [text], t.Id as tagId, t.[Name] as tagName 
                            from dbo.notebooks nb
                            join dbo.notes n ON n.NotebookId = nb.Id
                            left join dbo.notetags nt ON nt.NoteId = n.Id
                            left join dbo.tags t ON t.Id = nt.TagId
                            where nb.UserId = @userId";

                // Todo: test if there is an exception when an user has zero notebooks
                var notebooks = await connection.QueryAsync<NotebookDto, NoteDto, TagDto, NotebookDto>(
                    sql: sql,
                    map: (notebook, note, tag) =>
                    {
                        if (!notebookDictionary.TryGetValue(notebook.NotebookId, out var notebookEntry))
                        {
                            notebookEntry = notebook;
                            notebookEntry.Notes = new HashSet<NoteDto>();
                            notebookDictionary.Add(notebookEntry.NotebookId, notebookEntry);
                        }

                        if (!noteDictionary.TryGetValue(note.NoteId, out var noteEntry))
                        {
                            noteEntry = note;
                            noteEntry.Tags = new List<TagDto>();
                            noteDictionary.Add(noteEntry.NoteId, noteEntry);
                        }

                        noteEntry.Tags.Add(tag);
                        notebookEntry.Notes.Add(noteEntry);
                        return notebookEntry;
                    },
                    param: new {userId},
                    splitOn: "noteId,text");

                return new HashSet<NotebookDto>(notebooks);
            }
        }
    }
}