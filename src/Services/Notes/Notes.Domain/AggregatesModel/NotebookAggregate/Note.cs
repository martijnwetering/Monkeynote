using System;
using System.Collections.Generic;
using System.Linq;
using RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate;
using SharedKernel;
using SharedKernel.Extensions;
using SharedKernel.Infrastructure;

namespace RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.NotebookAggregate
{
    public class Note : Entity
    {
        public string Title { get; private set; }
        public string Text { get; private set; }

        public ICollection<NoteTag> NoteTags { get; private set; } = new List<NoteTag>();

        public ICollection<Tag> Tags { get; private set; } = new List<Tag>();

        private Note()
        {
            
        }

        public Note(string title, string text)
        {
            Title = title ?? throw new ArgumentNullException(nameof(title));
            Text = text ?? throw new ArgumentNullException(nameof(text));
            
            // AddNoteTags(tags);

            Tags = new JoinCollectionFacade<Tag, NoteTag>(
                NoteTags,
                noteTag => noteTag.Tag,
                tag => new NoteTag(this, tag));
        }

        public void AddTag(Tag tag)
        {
            if (tag == null)
            {
                throw new ArgumentNullException(nameof(tag));
            }

            this.Tags.Add(tag);
        }
    }
}
