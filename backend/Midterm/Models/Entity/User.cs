using System.ComponentModel.DataAnnotations;

namespace Midterm.Models.Entity
{
    public class User
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string AvatarUrl { get; set; }
    }
}
