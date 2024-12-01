using Microsoft.AspNetCore.Mvc;
using backend.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly Supabase.Client _supabaseClient;
        private readonly IConfiguration _configuration;

        public LoginController(Supabase.Client supabaseClient, IConfiguration configuration)
        {
            _supabaseClient = supabaseClient;
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginRequest loginRequest)
        {
            if (loginRequest == null || string.IsNullOrEmpty(loginRequest.Email) || string.IsNullOrEmpty(loginRequest.Password))
            {
                return BadRequest(new { message = "El email y la contraseña son obligatorios" });
            }

            try
            {
                var user = (await _supabaseClient
                    .From<Users>()
                    .Where(n => n.email == loginRequest.Email)
                    .Get())
                    .Models
                    .FirstOrDefault();

                if (user == null)
                {
                    return Unauthorized(new { message = "Usuario no encontrado" });
                }

                if (!BCrypt.Net.BCrypt.Verify(loginRequest.Password, user.password))
                {
                    return Unauthorized(new { message = "Contraseña incorrecta" });
                }

                var token = GenerateJwtToken(user);
                return Ok(new
                {
                    token,
                    user = new { user.name, user.email, user.registerDate }
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error interno del servidor", details = ex.Message });
            }
        }

        private string GenerateJwtToken(Users user)
        {
            var secretKey = Environment.GetEnvironmentVariable("JWTSETTINGS_SECRETKEY");
            var key = Encoding.ASCII.GetBytes(secretKey);

            var tokenHandler = new JwtSecurityTokenHandler();
            var claims = new[]
            {
            new Claim("id", user.id.ToString()),
            new Claim("email", user.email)
        };
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }

}
