using Midterm.Models.Entity;

namespace Midterm.Repositories
{
    public interface IUserRepository
    {
        public Task<bool> SignUp(User registerUser);
        public Task<bool> SignIn(User loginUser);
    }
}
