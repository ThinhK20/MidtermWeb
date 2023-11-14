namespace Midterm.Models.DTO
{
    public class UserDTO
    {
        public Guid UserId { get; set; } = Guid.NewGuid();
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? FulllName { get; set; }
        public string? Location { get; set; }
        public int Age { get; set; } = 0;
        public string? Gender { get; set; }
        public string? Email { get; set; }
        public string? Facebook { get; set; }
        public string? Phone { get; set; }
        public string? Avatar { get; set; }
        public string? CoverImage { get; set; }
        public string? About { get; set; }
        public string AccessToken { get; set; } = String.Empty;
        public string RefreshToken { get; set; } = String.Empty;
    }
}
