FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
COPY /src /src
WORKDIR /src/Services/Notes/Notes.Api
RUN dotnet restore Notes.Api.csproj
WORKDIR /src/Services/Notes/Notes.Api
RUN dotnet build Notes.Api.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Notes.Api.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "RocketMonkey.Monkeynote.Notes.Api.dll"]