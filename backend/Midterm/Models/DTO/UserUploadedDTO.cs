using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Midterm.Models.DTO
{
    public class UserUploadedDTO
    {
        public string? Username { get; set; }
        [PasswordPropertyText]
        public string? Password { get; set; }
        [EmailAddress]
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public IFormFile? AvatarFile { get; set; }

        //hhman
        public string? FulllName { get; set; }
        public string? Location { get; set; }
        public int Age { get; set; } = 0;
        public string? Gender { get; set; }
        public string? Facebook { get; set; }
        public IFormFile? CoverImage { get; set; }
        public string? About { get; set; }
    }
}
