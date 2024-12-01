using backend.Models;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly Supabase.Client _supabaseClient;

        public UsersController(Supabase.Client supabaseClient)
        {
            _supabaseClient = supabaseClient;
        }

        [HttpGet]
        public IActionResult GetProtectedData()
        {
            var userId = HttpContext.Items["User"]?.ToString();

            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized(new { message = "Token inválido o no proporcionado" });
            }
    
            return Ok(new { message = "Acceso permitido", userId });
        }


        [HttpPost]
        public async Task<IActionResult> Register(Users user)
        {
            user.password = BCrypt.Net.BCrypt.HashPassword(user.password);

            await _supabaseClient.From<Users>().Insert(user);
            return Ok(new { message = "Usuario registrado exitosamente" });
        }
    }
}