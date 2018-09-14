using System.Collections.Generic;
using SharedKernel;

namespace RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate
{
    public class Tag : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public ICollection<NoteTag> NoteTags { get; private set; } = new List<NoteTag>();

        public Tag()
        {
            
        }

        public Tag(string name)
        {
            Name = name;
        }

    }
}