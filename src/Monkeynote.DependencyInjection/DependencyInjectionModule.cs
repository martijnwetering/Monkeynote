using System;
using Autofac;
using Monkeynote.Core;

namespace Monkeynote.DependencyInjection
{
    public class DependencyInjectionModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.Register(c => new Note()).As<Note>();
        }
    }
}
