using Autofac;
using RocketMonkey.Monkeynote.Notes.Api.Application.Queries;

namespace RocketMonkey.Monkeynote.Notes.Api.Infrastructure.AutofacModules
{
    public class ApplicationModule : Module
    {
        private readonly string _queriesConnectionString;

        public ApplicationModule(string queriesConnectionString)
        {
            _queriesConnectionString = queriesConnectionString;
        }

        protected override void Load(ContainerBuilder builder)
        {
            builder.Register(c => new NotesQueries(_queriesConnectionString))
                .As<INotesQueries>()
                .InstancePerLifetimeScope();
        }
    }
}