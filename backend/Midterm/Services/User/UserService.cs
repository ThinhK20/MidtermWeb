using Midterm.Models.DTO;
using Midterm.Models.Entity;
using Midterm.Repositories;

namespace Midterm.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IImageRepository _imageRepository;

        public UserService(IUserRepository userRepository, IImageRepository imageRepository)
        {
            _userRepository = userRepository;
            _imageRepository = imageRepository;
        }

        public async Task<bool> SignUp(UserUploadedDTO registerUser)
        {
            Image avatar = await _imageRepository.UploadImageAsync(new ImageUploadedDTO
            {
                Description = "",
                File = registerUser.AvatarFile
            });
            User user = new User
            {
                Email = registerUser.Email,
                Password = registerUser.Password,
                Phone = registerUser.Phone,
                Username = registerUser.Username,
                AvatarUrl = avatar.Url,
            };
            // Insert more logic here.
            return await _userRepository.SignUp(user);
        }

        public async Task<User> SignIn(string email, string password)
        {
            return await _userRepository.SignIn(email, password);
        }

    }
}
