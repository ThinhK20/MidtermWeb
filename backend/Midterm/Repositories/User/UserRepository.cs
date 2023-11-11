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
            await _dbContext.Users.AddAsync(registerUser); // Add user
            await _dbContext.SaveChangesAsync(); // Save user to database
            return true;
        }
    }
}
