using System;
using System.Collections.Generic;

namespace RocketMonkey.Monkeynote.Notes.Api.Application.Dtos
{
    public class NotebookDto
    {
        public int NotebookId { get; set; }
        public string Title { get; set; }
        public ICollection<NoteDto> Notes { get; set; }

        public override bool Equals(object obj)
        {
            if (obj == null || obj.GetType() != this.GetType())
                return false;

            if (Object.ReferenceEquals(this, obj))
                return true;

            if (this.GetType() != obj.GetType())
                return false;

            var item = (NotebookDto) obj;

            return this.NotebookId == item.NotebookId;
        }

        public override int GetHashCode() => HashCode.Combine(NotebookId, Title);
    }
}