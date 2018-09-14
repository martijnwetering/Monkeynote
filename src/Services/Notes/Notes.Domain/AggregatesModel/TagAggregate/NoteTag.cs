using System;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate;

namespace RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate
{
    public class NoteTag
    {
        public int NoteId { get; private set; }
        public Note Note { get; private set; }

        public int TagId { get; private set; }
        public Tag Tag { get; private set; }

        private NoteTag()
        {
            
        }

        public NoteTag(Note note, Tag tag)
        {
            Note = note ?? throw new ArgumentNullException(nameof(note));
            Tag = tag ?? throw new ArgumentNullException(nameof(tag));
        }
    }
}