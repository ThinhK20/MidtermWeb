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
                Avatar = avatar.Url,
            };
            // Insert more logic here.
            return await _userRepository.SignUp(user);
        }

        public async Task<User> SignIn(string email, string password)
        {
            return await _userRepository.SignIn(email, password);
        }

        // hhman
        public async Task<User?> getSingleUser(Guid id)
        {
            return await _userRepository.getSingleUserAsync(id);
        }

        public async Task<bool> deleteSingleUser(Guid id)
        {
            return await _userRepository.deleteSingleUserAsync(id);
        }

        public async Task<bool> updateSingleUser(Guid id, UserUploadedDTO uploadUser)
        {
            User? user = await getSingleUser(id);
            if (user is null || uploadUser is null) return false;


            user.Username = uploadUser.Username;
            user.Username = uploadUser.Username;
            user.Password = BCrypt.Net.BCrypt.HashPassword(uploadUser.Password);
            user.FulllName = uploadUser.FulllName;
            user.About = uploadUser.About;
            user.Gender = uploadUser.Gender;
            user.Location = uploadUser.Location;
            user.Email = uploadUser.Email;
            user.Facebook = uploadUser.Facebook;
            user.Phone = uploadUser.Phone;
            user.Age    = uploadUser.Age;

            Image avatar = await _imageRepository.UploadImageAsync(new ImageUploadedDTO
            {
                Description = "",
                File = uploadUser.AvatarFile
            });

            Image coverImage = await _imageRepository.UploadImageAsync(new ImageUploadedDTO
            {
                Description = "",
                File = uploadUser.CoverImage
            });

            user.Avatar = avatar.Url;
            user.CoverImage = coverImage.Url;


            return await _userRepository.updateInfoUserAsync(user);
        }
        // end
    }
}
