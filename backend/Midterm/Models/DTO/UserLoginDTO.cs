using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Midterm.Models.DTO
{
    public class UserLoginDTO
    {
        [EmailAddress]
        public string Email { get; set; }
        [PasswordPropertyText]
        public string Password { get; set; }
    }
}
