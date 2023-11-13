using System.ComponentModel.DataAnnotations;

namespace Midterm.Models.Entity
{
    public class User
    {
        #region fields
        [Key]
        public Guid UserId { get; set; } = Guid.NewGuid();
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? FulllName { get; set; } 
        public string? Location { get; set; }
        public int? Age { get; set; }
        public string? Gender { get; set; }
        public string? Email { get; set; }
        public string? Facebook { get; set; }
        public string? Phone { get; set; }
        public string? Avatar {  get; set; }
        public string? CoverImage {  get; set; }
        public string? About { get; set; }
        #endregion

    }
}
