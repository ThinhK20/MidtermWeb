using Microsoft.AspNetCore.Mvc;
using Midterm.Models.DTO;
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

        [HttpPost("signup")]
        public async Task<ActionResult<bool>> SignUp([FromForm] UserUploadedDTO registerUser)
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

        [HttpPost("login")]
        public async Task<ActionResult<User>> SignIn(UserLoginDTO userLoginDTO)
        {
            try
            {
                return Ok(await _userService.SignIn(userLoginDTO.Email, userLoginDTO.Password));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
