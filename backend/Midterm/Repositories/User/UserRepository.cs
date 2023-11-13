using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Midterm.Data;
using Midterm.Models.Entity;

namespace Midterm.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public UserRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> SignUp(User registerUser)
        {
            if (registerUser == null) throw new ArgumentNullException(nameof(registerUser));
            var existedUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == registerUser.Email);
            if (existedUser != null) { throw new Exception("User already existed."); }
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(registerUser.Password);
            registerUser.Password = hashedPassword;
            await _dbContext.Users.AddAsync(registerUser); // Add user
            await _dbContext.SaveChangesAsync(); // Save user to database
            return true;
        }

<<<<<<< HEAD
        public async Task<User> getSingleUserAsync(int id)
        {
            var user = await _dbContext.Users!.FindAsync(id);

            return user;
        }

=======
        public async Task<User> SignIn(string email, string password)
        {
            if (email == null) throw new ArgumentNullException(nameof(email));
            var existedUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (existedUser == null) { throw new Exception("User does not exist."); }
            if (!BCrypt.Net.BCrypt.Verify(password, existedUser.Password))
            {
                throw new Exception("Password incorrect.");
            }
            return existedUser;
        }
>>>>>>> main
    }
}
