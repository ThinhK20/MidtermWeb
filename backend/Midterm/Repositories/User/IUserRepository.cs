using Midterm.Models.Entity;

namespace Midterm.Repositories
{
    public interface IUserRepository
    {
        public Task<bool> SignUp(User registerUser);
        public Task<User> SignIn(string email, string password);
    }
}
