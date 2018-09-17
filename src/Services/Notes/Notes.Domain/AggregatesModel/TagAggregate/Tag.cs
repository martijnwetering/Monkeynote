using System.Collections.Generic;
using SharedKernel;

namespace RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate
{
    public class Tag : Entity, IAggregateRoot
    {
        public string Name { get; private set; }

        // EF Core navigation property
        private ICollection<NoteTag> NoteTags { get; set; } = new List<NoteTag>();

        public Tag()
        {
            
        }

        public Tag(string name)
        {
            Name = name;
        }

    }
}