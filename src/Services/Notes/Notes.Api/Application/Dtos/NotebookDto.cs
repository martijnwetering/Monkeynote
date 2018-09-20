using System.Collections.Generic;

namespace RocketMonkey.Monkeynote.Notes.Api.Application.Dtos
{
    public class NotebookDto
    {
        public int NotebookId { get; set; }
        public string Title { get; set; }
        public ICollection<NoteDto> Notes { get; set; }
    }
}