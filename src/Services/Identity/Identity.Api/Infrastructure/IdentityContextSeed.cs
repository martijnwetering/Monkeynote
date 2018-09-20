using System;
using System.Linq;
using System.Security.Claims;
using IdentityModel;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RocketMonkey.Moneynote.Identity.Api.Models;

namespace RocketMonkey.Monkeynote.Identity.Api.Infrastructure
{
    public class IdentityContextSeed
    {
        public static void EnsureSeedData(IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetService<IdentityContext>();
                var logger = scope.ServiceProvider.GetService<ILogger<IdentityContextSeed>>();

                context.Database.Migrate();

                var userMgr = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
                var alice = userMgr.FindByNameAsync("alice").Result;
                if (alice == null)
                {
                    alice = new ApplicationUser
                    {
                        UserName = "alice",
                        Id = "2919a0b0-8a3c-4b8e-842d-35cc504e3aad"
                    };
                    var result = userMgr.CreateAsync(alice, "Passw0rd!").Result;
                    if (!result.Succeeded)
                    {
                        throw new Exception(result.Errors.First().Description);
                    }

                    result = userMgr.AddClaimsAsync(alice, new Claim[]{
                        new Claim(JwtClaimTypes.Name, "Alice Smith"),
                        new Claim(JwtClaimTypes.GivenName, "Alice"),
                        new Claim(JwtClaimTypes.FamilyName, "Smith"),
                        new Claim(JwtClaimTypes.Email, "AliceSmith@email.com"),
                        new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                        new Claim(JwtClaimTypes.Address, @"{ 'street_address': 'One Hacker Way', 'locality': 'Heidelberg', 'postal_code': 69118, 'country': 'Germany' }", IdentityServer4.IdentityServerConstants.ClaimValueTypes.Json),
                        new Claim("country", "nl"),
                        new Claim(JwtClaimTypes.Role, "FreeUser"),
                    }).Result;
                    if (!result.Succeeded)
                    {
                        logger.LogDebug("Exception when adding claims", result.Errors.FirstOrDefault()?.Description);
                        throw new Exception(result.Errors.First().Description);
                    }

                    logger.LogInformation("User Alice was created");
                }
                else
                {
                    logger.LogInformation("User Alice allready exists");
                }

                var bob = userMgr.FindByNameAsync("bob").Result;
                if (bob == null)
                {
                    bob = new ApplicationUser
                    {
                        UserName = "bob"
                    };
                    var result = userMgr.CreateAsync(bob, "Passw0rd!").Result;
                    if (!result.Succeeded)
                    {
                        throw new Exception(result.Errors.First().Description);
                    }

                    result = userMgr.AddClaimsAsync(bob, new Claim[]{
                        new Claim(JwtClaimTypes.Name, "Bob Smith"),
                        new Claim(JwtClaimTypes.GivenName, "Bob"),
                        new Claim(JwtClaimTypes.FamilyName, "Smith"),
                        new Claim(JwtClaimTypes.Email, "BobSmith@email.com"),
                        new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                        new Claim(JwtClaimTypes.Address, @"{ 'street_address': 'One Hacker Way', 'locality': 'Heidelberg', 'postal_code': 69118, 'country': 'Germany' }", IdentityServer4.IdentityServerConstants.ClaimValueTypes.Json),
                        new Claim("country", "nl"),
                        new Claim(JwtClaimTypes.Role, "FreeUser"),
                    }).Result;

                    if (!result.Succeeded)
                    {
                        logger.LogDebug("Exception when adding claims", result.Errors.FirstOrDefault()?.Description);
                        throw new Exception(result.Errors.First().Description);
                    }

                    logger.LogInformation("User Bob was created");
                }
                else
                {
                    logger.LogInformation("User Bob allready exists");
                }
            }
        }
    }
}