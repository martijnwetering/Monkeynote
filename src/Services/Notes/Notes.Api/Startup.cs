using System;
using System.Reflection;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.Extensions.Logging.Debug;
using RocketMonkey.Monkeynote.Notes.Api.Infrastructure;
using RocketMonkey.Monkeynote.Notes.Api.Infrastructure.AutofacModules;
using RocketMonkey.Monkeynote.Notes.Infrastructure;

namespace RocketMonkey.Monkeynote.Notes.Api
{
    public class Startup
    {
        private IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services
                .AddCustomMvc()
                .AddCustomDbContext(Configuration);

            services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = "https://localhost:5310";
                    options.ApiName = "monkeynote.notes.api";
                });

            var container = new ContainerBuilder();
            container.Populate(services);

            container.RegisterModule(new ApplicationModule(Configuration["ConnectionString"]));

            return new AutofacServiceProvider(container.Build());
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    var context = scope.ServiceProvider.GetService<NotesContext>();
                    var logger = scope.ServiceProvider.GetService<ILogger<NotesContextSeed>>();

                    NotesContextSeed.SeedAsync(context, logger).Wait();
                }
            }

            app.UseAuthentication();
            app.UseMvcWithDefaultRoute();
            app.UseCors("CorsPolicy");

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }
    }

    internal static class ExtensionMethods
    {
        public static IServiceCollection AddCustomMvc(this IServiceCollection services)
        {
            services
                .AddMvc()
                .AddControllersAsServices();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            return services;
        }

        private static readonly LoggerFactory MyLoggerFactory
            = new LoggerFactory(new ILoggerProvider[] { new DebugLoggerProvider((_, __) => true), new ConsoleLoggerProvider((_, __) => true, true) });

        public static IServiceCollection AddCustomDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddEntityFrameworkSqlServer()
                .AddDbContext<NotesContext>(options =>
                {
                    options.UseSqlServer(configuration["ConnectionString"],
                        sqlServerOptionsAction: sqlOptions =>
                        {
                            sqlOptions.MigrationsAssembly(typeof(Startup).GetTypeInfo().Assembly.GetName().Name);
                            sqlOptions.EnableRetryOnFailure(maxRetryCount: 10, maxRetryDelay: TimeSpan.FromSeconds(30),
                                errorNumbersToAdd: null);
                        });
                    options.UseLoggerFactory(MyLoggerFactory);
                });

            return services;
        }
    }
}
