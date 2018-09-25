using System;
using System.Collections.Generic;

namespace RocketMonkey.Monkeynote.Notes.Api.Application.Dtos
{
    public class NoteDto
    {
        public int NoteId { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }

        public ICollection<TagDto> Tags { get; set; }

        public override bool Equals(object obj)
        {
            if (obj == null || obj.GetType() != this.GetType())
                return false;

            if (Object.ReferenceEquals(this, obj))
                return true;

            if (this.GetType() != obj.GetType())
                return false;

            var item = (NoteDto)obj;

            return this.NoteId == item.NoteId;
        }

        public override int GetHashCode() => HashCode.Combine(NoteId, Title);
    }
}