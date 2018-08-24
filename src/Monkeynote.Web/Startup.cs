using System;
using System.IO;
using System.Linq;
using System.Reflection;
using Autofac;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.DependencyInjection;
using Autofac.Extensions.DependencyInjection;

namespace RocketMonkey.Monkeynote.Web
{
    public class Startup
    {
        public IContainer ApplicationContainer { get; private set; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            // Autofac
            var builder = new ContainerBuilder();

            builder.Populate(services);

            string path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            var dependencyInjectionAssembly = Directory.GetFiles(path, "Monkeynote.DependencyInjection.dll")
                .Select(Assembly.LoadFile)
                .First();

            builder.RegisterAssemblyModules(dependencyInjectionAssembly);
               
            this.ApplicationContainer = builder.Build();

            return new AutofacServiceProvider(this.ApplicationContainer);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            //app.UseForwardedHeaders(new ForwardedHeadersOptions
            //{
            //    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            //});

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World! 2");
            });
        }
    }
}
