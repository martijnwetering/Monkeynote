using System.Reflection;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.Extensions.Logging.Debug;
using RocketMonkey.Moneynote.Identity.Api.Models;
using RocketMonkey.Monkeynote.Identity.Api.Infrastructure;

namespace RocketMonkey.Moneynote.Identity.Api
{
    public class Startup
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfiguration _config;

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _env = env;
            _config = config;
        }

        private static readonly LoggerFactory MyLoggerFactory
            = new LoggerFactory(new ILoggerProvider[] { new DebugLoggerProvider((_, __) => true), new ConsoleLoggerProvider((_, __) => true, true) });

        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = _config["ConnectionString"];

            services.AddDbContext<IdentityContext>(options =>
            {
                options.UseSqlServer(connectionString);
                options.UseLoggerFactory(MyLoggerFactory);
            });

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<IdentityContext>()
                .AddDefaultTokenProviders();

            services.AddMvc();

            // Todo: Restrict who is allowed to make cors calls
            services.AddCors(o => o.AddPolicy("AllowAllRequest", builder =>
            {
                builder.AllowAnyHeader();
                builder.AllowAnyMethod();
                builder.AllowAnyOrigin();
            }));

            var migrationAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;
            var identityBuilder = services.AddIdentityServer(x => x.IssuerUri = "null")
                .AddConfigurationStore(options =>
                {
                    options.ConfigureDbContext = builder =>
                    {
                        builder.UseSqlServer(connectionString,
                            sql => sql.MigrationsAssembly(migrationAssembly));
                        builder.UseLoggerFactory(MyLoggerFactory);
                    };
                    
                })
                .AddOperationalStore(options =>
                {
                    options.ConfigureDbContext = builder =>
                    {
                        builder.UseSqlServer(connectionString,
                            sql => sql.MigrationsAssembly(migrationAssembly));
                        builder.UseLoggerFactory(MyLoggerFactory);

                    };

                    options.EnableTokenCleanup = true;
                    options.TokenCleanupInterval = 30;
                })
                .AddAspNetIdentity<ApplicationUser>();

            if (_env.IsDevelopment())
            {
                identityBuilder.AddDeveloperSigningCredential();
            }
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }

            InitializeDatabase(app);
            IdentityContextSeed.EnsureSeedData(app);

            app.UseCors("AllowAllRequest");
            app.UseIdentityServer();
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }

        private void InitializeDatabase(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                serviceScope.ServiceProvider.GetRequiredService<PersistedGrantDbContext>().Database.Migrate();

                var context = serviceScope.ServiceProvider.GetRequiredService<ConfigurationDbContext>();
                context.Database.Migrate();
                if (!context.Clients.Any())
                {
                    foreach (var client in Api.Config.GetClients())
                    {
                        context.Clients.Add(client.ToEntity());
                    }
                    context.SaveChanges();
                }

                if (!context.IdentityResources.Any())
                {
                    foreach (var resource in Api.Config.GetIdentityResources())
                    {
                        context.IdentityResources.Add(resource.ToEntity());
                    }
                    context.SaveChanges();
                }

                if (!context.ApiResources.Any())
                {
                    foreach (var resource in Api.Config.GetApiResources())
                    {
                        context.ApiResources.Add(resource.ToEntity());
                    }
                    context.SaveChanges();
                }
            }
        }
    }
}
