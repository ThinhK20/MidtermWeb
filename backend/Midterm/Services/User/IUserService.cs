using Midterm.Models.DTO;
using Midterm.Models.Entity;

namespace Midterm.Services
{
    public interface IUserService
    {
        public Task<bool> SignUp(UserUploadedDTO registerUser);
        public Task<User> SignIn(string email, string password);
    }
}
