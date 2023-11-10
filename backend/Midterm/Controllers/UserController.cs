using Microsoft.AspNetCore.Mvc;
using Midterm.Models.Entity;
using Midterm.Services;

namespace Midterm.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("add")]
        public async Task<ActionResult<bool>> SignUp([FromBody] User registerUser)
        {
            try
            {
                await _userService.SignUp(registerUser);
                return Ok("Sign up successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
