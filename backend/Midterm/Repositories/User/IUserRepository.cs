using Midterm.Models.DTO;
using Midterm.Models.Entity;

namespace Midterm.Repositories
{
    public interface IUserRepository
    {
        public Task<bool> SignUp(User registerUser);

        public Task<User> SignIn(string email, string password);

        #region hhman
        public Task<User?> getSingleUserAsync(Guid id);
        public Task<bool> deleteSingleUserAsync(Guid id);
        public Task<bool> deletePassWordUserAsync(Guid id, string currentPass, string newPass);
        public Task<bool> updateInfoUserAsync(User? currentUser);
        #endregion

    }
}
