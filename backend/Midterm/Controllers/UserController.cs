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

        // hhman

        // GET: api/<UerController>/2
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetSingleUser(Guid id)
        {
            try { 
                var user = await _userService.getSingleUser(id);

                if(user == null) return NotFound();

                return Ok(user);

            }
            catch (Exception err) { 
                return BadRequest(err.Message);
            }
        }

        // PUT: api/<UserController>/2
        [HttpPut("{id}")]
        public async Task<ActionResult> updateUser(Guid id, [FromForm] UserUploadedDTO user)
        {
            try { 
                var isSuccess = await _userService.updateSingleUser(id, user);
                if (!isSuccess) return NotFound("User doesn't exist");
                return Ok("Success !!");
            }
            catch (Exception err) { 
                return BadRequest(err.Message);
            }
        }

        // DELETE: api/<UserController>/3
        [HttpDelete("{id}")]
        public async Task<ActionResult> deleteUser(Guid id)
        {
            try
            {
                var isSuccess = await _userService.deleteSingleUser(id);
                if (!isSuccess) return NotFound("User doesn't exist");
                return Ok("Success !!");
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
        }
        // end
    }
}
