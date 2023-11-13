using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Midterm.Models.DTO
{
    public class UserUploadedDTO
    {
        public string Username { get; set; }
        [PasswordPropertyText]
        public string Password { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string Phone { get; set; }
        public IFormFile AvatarFile { get; set; }
    }
}
