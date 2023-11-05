using System.ComponentModel.DataAnnotations;

namespace Midterm.Models.Entity
{
    public class Image
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required]
        public DateTime DateAdded { get; set; } = DateTime.Now;
        public string Description { get; set; } = String.Empty;
        [Required]
        public string PublicId { get; set; } = String.Empty;
        [Required]
        public string Url { get; set; } = String.Empty;
    }
}
