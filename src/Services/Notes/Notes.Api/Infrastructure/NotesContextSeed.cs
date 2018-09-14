using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Razor.Language.CodeGeneration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Polly;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate;
using RocketMonkey.Monkeynote.Notes.Infrastructure;

namespace RocketMonkey.Monkeynote.Notes.Api.Infrastructure
{
    public class NotesContextSeed
    {
        private static readonly List<Tag> Tags = new List<Tag>()
        {
            new Tag("coding"),
            new Tag("infrastucture"),
            new Tag("DDD"),
            new Tag("C#"),
            new Tag("dotnet")
        };

        private static readonly List<Note> Notes = new List<Note>()
        {
            new Note("Test-Note-1", "Dit is de test tekst voor een note"),
            new Note("Test-Note-2", "Dit is de test tekst voor een note"),
            new Note("Test-Note-3", "Dit is de test tekst voor een note")
        };

        private static readonly List<Notebook> Notebooks = new List<Notebook>()
        {
            new Notebook(new Guid("2919a0b0-8a3c-4b8e-842d-35cc504e3aad"), "Test-Notebook-1", Notes),
            new Notebook(new Guid("51645599-19c5-43b2-b12a-f2ece787f0c7"), "Test-Notebook-2", Notes),
            new Notebook(new Guid("918bb825-b9c8-4a2c-8f28-ca45a6b202e8"), "Test-Notebook-3", Notes)
        };

        public static async Task SeedAsync(NotesContext context, ILogger<NotesContextSeed> logger)
        {
            try
            {
                using (context)
                {
                    logger.LogInformation($"Starting migration of database on context {nameof(NotesContext)}");

                    context.Database.Migrate();

                    var retries = 3;
                    var policy = Policy.Handle<SqlException>()
                        .WaitAndRetryAsync(
                            retries,
                            (count, ctx) => TimeSpan.FromSeconds(3),
                            (exception, timeSpan, retry, ctx) =>
                            {
                                logger.LogError(exception,
                                    $"[NotesContextSeed] Exception {exception.GetType().Name} with message {exception.Message} on attempt {retry} of {retries}");
                            });

                    await policy.ExecuteAsync(async () =>
                    {
                        if (!context.Notebooks.Any())
                        {
                            context.Tags.AddRange(Tags);
                            await context.SaveChangesAsync();

                            Tags.ForEach(tag => Notes.ForEach(note => note.AddTag(tag)));

                            context.Notebooks.AddRange(Notebooks);
                            await context.SaveChangesAsync();
                        }
                    });

                    logger.LogInformation($"Finished migrating database on context {nameof(NotesContext)}");
                }

            }
            catch (Exception ex)
            {
                logger.LogError(ex, $"An error occurred while migrating database on context {nameof(NotesContext)}");
            }
        }
    }
}