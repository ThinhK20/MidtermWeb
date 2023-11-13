using Microsoft.EntityFrameworkCore;
using Midterm.Data;
using Midterm.Models.DTO;
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

        // hhman
        public async Task<User?> getSingleUserAsync(Guid id)
        {
            try {
                var user = await _dbContext.Users!.SingleOrDefaultAsync(u => u.UserId == id);

                if (user == null)
                    return null;

                return user;
            }
            catch (Exception err) {
                throw new Exception(err.Message);
            }

        }
        public async Task<bool> deleteSingleUserAsync(Guid id)
        {
            try {
                var deleteUser = await _dbContext.Users!.SingleOrDefaultAsync(u => u.UserId == id);
                
                if(deleteUser is null) return false;

                _dbContext.Users!.Remove(deleteUser);
                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception err) {
                throw new Exception(err.Message);
            }

        }
        public async Task<bool> updateInfoUserAsync(User? currentUser)
        {
            try { 

                if(currentUser == null) return false;

                _dbContext.Users!.Update(currentUser);
   
                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception err)
            {
                throw new Exception(err.Message);
            }
        }
        //end
    }
}
