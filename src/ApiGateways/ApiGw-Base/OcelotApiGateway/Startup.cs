using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using IdentityServer4.AccessTokenValidation;

namespace RocketMonkey.Moneynote.OcelotApiGateway
{
    public class Startup
    {

        private IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            //var identityUrl = Configuration.GetValue<string>("IdentityUrl");
            //var authenticationProviderKey = "IdentityApiKey";

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            //services.AddAuthentication()
            //    .AddJwtBearer(authenticationProviderKey, x =>
            //    {
            //        x.Authority = identityUrl;
            //        x.RequireHttpsMetadata = false;
            //        x.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
            //        {
            //            ValidAudiences = new[] { "monkeynote.notes.api"}
            //        };
            //        x.Events = new Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerEvents()
            //        {
            //            OnAuthenticationFailed = async ctx =>
            //            {
            //                int i = 0;
            //            },
            //            OnTokenValidated = async ctx =>
            //            {
            //                int i = 0;
            //            },

            //            OnMessageReceived = async ctx =>
            //            {
            //                int i = 0;
            //            }
            //        };
            //    });

            var identityUrl = Configuration.GetValue<string>("IdentityUrl");
            services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = identityUrl;
                    options.ApiName = "monkeynote.notes.api";
                    options.SupportedTokens = SupportedTokens.Jwt;

                    // Todo: https must be enabled for production
                    options.RequireHttpsMetadata = false;
                });

            services.AddOcelot(Configuration);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            var pathBase = Configuration["PATH_BASE"];
            if (!string.IsNullOrEmpty(pathBase))
            {
                app.UsePathBase(pathBase);
            }

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));

            app.UseCors("CorsPolicy");
            app.UseAuthentication();
            app.UseOcelot().Wait();
        }
    }
}
