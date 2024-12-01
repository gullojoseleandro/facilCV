using Supabase;
using Microsoft.AspNetCore.Builder;
using DotNetEnv;

var builder = WebApplication.CreateBuilder(args);

// Cargar variables de entorno desde el archivo .env
Env.Load();

// Configurar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOrigin",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

var supabaseUrl = Environment.GetEnvironmentVariable("SUPABASE_URL");
var supabaseKey = Environment.GetEnvironmentVariable("SUPABASE_KEY");

Console.WriteLine($"Supabase URL: {supabaseUrl}");
Console.WriteLine($"Supabase Key: {supabaseKey}");

if (string.IsNullOrEmpty(supabaseUrl) || string.IsNullOrEmpty(supabaseKey))
{
    throw new Exception("Las variables de entorno de Supabase no están configuradas correctamente.");
}

// Configurar cliente Supabase utilizando variables de entorno
builder.Services.AddScoped<Supabase.Client>(_ =>
    new Supabase.Client(
        supabaseUrl,  // Asegúrate de que el nombre sea correcto
        supabaseKey,  // Asegúrate de que el nombre sea correcto
        new SupabaseOptions
        {
            AutoRefreshToken = true,
            AutoConnectRealtime = true,
        }
    ));

// Configurar autorización y controladores
builder.Services.AddAuthorization();
builder.Services.AddControllers();

var app = builder.Build();

// Configuración del middleware
app.UseHttpsRedirection();
app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseRouting();
app.UseMiddleware<JwtMiddleware>();
app.UseAuthorization();

app.MapControllers();

app.Run();