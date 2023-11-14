using AutoMapper;
using Midterm.Models.DTO;
using Midterm.Models.Entity;
using Midterm.Repositories;
using Midterm.Repositories.Auth;

namespace Midterm.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IImageRepository _imageRepository;
        private readonly IAuthRepository _authRepository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, IImageRepository imageRepository, IAuthRepository authRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _imageRepository = imageRepository;
            _authRepository = authRepository;
            _mapper = mapper;
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

        public async Task<UserDTO> SignIn(string email, string password)
        {
            User loginUser = await _userRepository.SignIn(email, password);
            string accessToken = _authRepository.GenerateJwtToken(loginUser);
            UserDTO userDTO = _mapper.Map<UserDTO>(loginUser);
            userDTO.AccessToken = accessToken;
            return userDTO;
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


            if (uploadUser.Username != null) user.Username = uploadUser.Username;
            if (uploadUser.Password != null) user.Password = BCrypt.Net.BCrypt.HashPassword(uploadUser.Password);
            if (uploadUser.FulllName != null) user.FulllName = uploadUser.FulllName;
            if (uploadUser.About != null) user.About = uploadUser.About;
            if (uploadUser.Gender != null) user.Gender = uploadUser.Gender;
            if (uploadUser.Location != null) user.Location = uploadUser.Location;
            if (uploadUser.Email != null) user.Email = uploadUser.Email;
            if (uploadUser.Facebook != null) user.Facebook = uploadUser.Facebook;
            if (uploadUser.Phone != null) user.Phone = uploadUser.Phone;
            if (uploadUser.Age > 0) user.Age = uploadUser.Age;

            if (uploadUser.AvatarFile is not null)
            {
                Image avatar = await _imageRepository.UploadImageAsync(new ImageUploadedDTO
                {
                    Description = "",
                    File = uploadUser.AvatarFile
                });

                user.Avatar = avatar.Url;
            }

            if (uploadUser.CoverImage is not null)
            {
                Image coverImage = await _imageRepository.UploadImageAsync(new ImageUploadedDTO
                {
                    Description = "",
                    File = uploadUser.CoverImage
                });

                user.CoverImage = coverImage.Url;
            }

            return await _userRepository.updateInfoUserAsync(user);
        }
        // end
    }
}
