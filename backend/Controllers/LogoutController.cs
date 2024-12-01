using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LogoutController : ControllerBase
    {

        private readonly Supabase.Client _supabaseClient;

        public LogoutController(Supabase.Client supabaseClient)
        {
            _supabaseClient = supabaseClient;
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            try
            {
                await _supabaseClient.Auth.SignOut();
                return Ok("Sesión cerrada correctamente");
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error al cerrar la sesión");
            }
        }

    }
}