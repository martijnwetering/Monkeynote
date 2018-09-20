using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RocketMonkey.Monkeynote.Notes.Api.Application.Queries;

namespace RocketMonkey.Monkeynote.Notes.Api.Controllers
{
    [Route("api/v1/notebooks")]
    [Authorize]
    public class NotebookController : Controller
    {
        private readonly INotesQueries _notesQueries;

        public NotebookController(INotesQueries _notesQueries)
        {
            this._notesQueries = _notesQueries;
        }

        [HttpGet]
        public async Task<IActionResult> GetNotebooks()
        {
            var userId = Guid.Parse(User.Claims.FirstOrDefault(c => c.Type == "sub")?.Value);
            var notebooks = await _notesQueries.GetNotebooksAsync(userId);

            return Ok(notebooks);
        }
    }
}