using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RocketMonkey.Monkeynote.Notes.Api.Application.Dtos;
using RocketMonkey.Monkeynote.Notes.Api.Application.Queries;

namespace RocketMonkey.Monkeynote.Notes.Api.Controllers
{
    [Route("api/v1/notebooks")]
    [Authorize]
    public class NotebookController : Controller
    {
        private readonly INotesQueries _notesQueries;

        public NotebookController(INotesQueries notesQueries)
        {
            this._notesQueries = notesQueries;
        }

        [HttpGet]
        public async Task<IActionResult> GetNotebooks([FromQuery]bool isDefaultNotebook = false)
        {
            var userId = GetUserId();

            List<NotebookDto> notebooks = new List<NotebookDto>();
            if (isDefaultNotebook)
            {
                notebooks.Add(await _notesQueries.GetDefaultNotebookWithNotesAsync(userId));
            }
            else
            {
                notebooks.AddRange(await _notesQueries.GetNotebooksAsync(userId));
            }
            
            return Ok(notebooks);
        }


        [HttpGet]
        [Route("{notebookId:int}")]
        public async Task<IActionResult> GetNotebook([FromRoute]int notebookId)
        {
            var userId = GetUserId();
            var notebook = await _notesQueries.GetNotebookWithNotesAsync(userId, notebookId);

            return Ok(notebook);
        }

        private Guid GetUserId()
        {
            return Guid.Parse(User.Claims.FirstOrDefault(c => c.Type == "sub")?.Value);
        }

    }
}