using SharedKernel;

namespace RocketMonkey.Monkeynote.Notes.Domain.AggregatesModel.TagAggregate
{
    public interface ITagRepository : IRepository<Tag>
    {
        Tag Add(Tag tag);
    }
}