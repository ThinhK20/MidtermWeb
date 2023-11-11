using Midterm.Models.Entity;

namespace Midterm.Services
{
    public interface IUserService
    {
        public Task<bool> SignUp(User registerUser);
    }
}
