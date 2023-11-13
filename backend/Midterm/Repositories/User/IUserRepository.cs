using Microsoft.AspNetCore.Mvc;
using Midterm.Models.Entity;

namespace Midterm.Repositories
{
    public interface IUserRepository
    {
        public Task<bool> SignUp(User registerUser);
<<<<<<< HEAD
        public Task<User> getSingleUserAsync(int id);
=======
        public Task<User> SignIn(string email, string password);
>>>>>>> main
    }
}
