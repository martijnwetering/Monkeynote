using System;
using System.Collections.Generic;
using SharedKernel;

namespace RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate
{
    public class Notebook : Entity, IAggregateRoot
    {
        private Guid _userId;
        public string Title { get; private set; }

        public IReadOnlyCollection<Note> Notes => _notes;
        private List<Note> _notes = new List<Note>();

        private Notebook()
        {
            
        }

        public Notebook(Guid userId, string name) : this(userId, name, new List<Note>())
        {
            
        }

        public Notebook(Guid userId, string name, List<Note> notes)
        {
            Title = name ?? throw new ArgumentNullException(nameof(name));
            _notes = notes ?? throw new ArgumentNullException(nameof(notes));

            if (userId == Guid.Empty) throw new ArgumentNullException(nameof(userId));
            _userId = userId;
        }
    }
}