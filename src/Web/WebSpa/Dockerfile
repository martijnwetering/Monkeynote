ARG NODE_IMAGE=node:8.11
FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk as dotnet-build
WORKDIR /src

FROM ${NODE_IMAGE} as node-build
WORKDIR /web
COPY src/Web/WebSpa .
RUN yarn install
RUN yarn run build:dev

FROM dotnet-build as publish
WORKDIR /src/wwwroot
COPY --from=node-build web/wwwroot .
WORKDIR /src
COPY /src/Web/WebSpa/WebSpa.csproj .
RUN dotnet restore /src/WebSpa.csproj
COPY /src/Web/WebSpa .
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "WebSpa.dll"]
