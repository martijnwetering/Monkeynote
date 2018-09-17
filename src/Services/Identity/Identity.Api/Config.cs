using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;

namespace RocketMonkey.Moneynote.Identity.Api
{
    public static class Config
    {
        // identity-related resources (scopes)
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Address(),
                new IdentityResource(
                    "roles",
                    "Your role(s)",
                     new List<string>() { "role" }),
                new IdentityResource(
                    "country",
                    "The country you're living in",
                    new List<string>() { "country" }),
                new IdentityResource(
                    "subscriptionlevel",
                    "Your subscription level",
                    new List<string>() { "subscriptionlevel" })
            };
        }

        // api-related resources (scopes)
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("monkeynote.notes.api", "Monkeynote Notes API")
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>()
            {
                new Client
                {
                    ClientName = "Monkeynote",
                    ClientId = "monkeynotewebclient",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AccessTokenType = AccessTokenType.Jwt,
                    RequireConsent = false,
                    AllowAccessTokensViaBrowser = true,
                    //IdentityTokenLifetime = ...
                    //AuthorizationCodeLifetime = ...
                    AccessTokenLifetime = 120,
                    AllowOfflineAccess = true,
                    //AbsoluteRefreshTokenLifetime = ...
                    UpdateAccessTokenClaimsOnRefresh = true,
                    RedirectUris = new List<string>()
                    {
                        "http://localhost:4200/signin-oidc",
                        "http://localhost:4200/redirect-silentrenew"                    },
                    PostLogoutRedirectUris = new List<string>()
                    {
                        "http://localhost:4200"
                    },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Address,
                        "roles",
                        "monkeynote.notes.api",
                        "country",
                    }
                }
             };
        }
    }
}