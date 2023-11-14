using Midterm.Models.Entity;

namespace Midterm.Repositories.Auth
{
    public interface IAuthRepository
    {
        public string GenerateJwtToken(User user);
    }
}
