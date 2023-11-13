using Microsoft.EntityFrameworkCore;
using Midterm.Models.Entity;

namespace Midterm.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Image> Images { get; set; }
<<<<<<< HEAD

        #region Dbset
        public DbSet<User> Users { get; set; } // New
        #endregion
=======
        public DbSet<User> Users { get; set; }
>>>>>>> main

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
