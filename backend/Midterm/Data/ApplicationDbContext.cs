using Microsoft.EntityFrameworkCore;
using Midterm.Models.Entity;

namespace Midterm.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Image> Images { get; set; }

        #region Dbset
        public DbSet<User> Users { get; set; } // New
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
