using Midterm.Models.Entity;
using Midterm.Repositories;

namespace Midterm.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<bool> SignUp(User registerUser)
        {
            // Insert more logic here.
            return await _userRepository.SignUp(registerUser);
        }
    }
}
