using Autofac;

namespace RocketMonkey.Monkeynote.Notes.Api.Infrastructure.AutofacModules
{
    public class ApplicationModule : Module
    {
        private readonly string _connectionString;

        public ApplicationModule(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
        }
    }
}