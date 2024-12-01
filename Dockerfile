# Usar la imagen base oficial de .NET 8.0
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5271

# Usar la imagen del SDK de .NET 8.0 para compilar tu aplicación
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["backend/backend.csproj", "backend/"]
RUN dotnet restore "backend/backend.csproj"
COPY . . 
WORKDIR "/src/backend"
RUN dotnet build "backend.csproj" -c Release -o /app/build

# Publica la aplicación
FROM build AS publish
RUN dotnet publish "backend.csproj" -c Release -o /app/publish && \
    rm -rf /app/build /app/.nuget

# Define la imagen final para ejecutar la aplicación
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish . 
ENTRYPOINT ["dotnet", "backend.dll"]
