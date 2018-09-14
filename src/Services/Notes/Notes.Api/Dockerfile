FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY src/Services/Notes/Notes.Api/Notes.Api.csproj src/Services/Notes/Notes.Api/
RUN dotnet restore src/Services/Notes/Notes.Api/Notes.Api.csproj
COPY . .
WORKDIR /src/src/Services/Notes/Notes.Api
RUN dotnet build Notes.Api.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Notes.Api.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "RocketMonkey.Monkeynotes.Notes.Api.dll"]
