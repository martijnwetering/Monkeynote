using System.Collections.Generic;

namespace RocketMonkey.Monkeynote.Notes.Api.Application.Dtos
{
    public class NotebookWithNotesDto : NotebookDto
    {
        public ICollection<NoteDto> Notes { get; set; }

    }
}