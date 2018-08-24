FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 62243
EXPOSE 44389

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY src/Monkeynote.Web/Monkeynote.Web.csproj Monkeynote.Web/
RUN dotnet restore Monkeynote.Web/Monkeynote.Web.csproj
COPY . .
WORKDIR src/Monkeynote.Web
RUN dotnet build Monkeynote.Web.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Monkeynote.Web.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Monkeynote.Web.dll"]
