using Midterm.Data;
using Midterm.Models.DTO;
using Midterm.Models.Entity;

namespace Midterm.Repositories
{
    public interface IImageRepository
    {
        public Task<Image> UploadImageAsync(ImageUploadedDTO uploadedImage);
        public Task<List<Image>> GetAllImagesAsync();
        public Task<bool> DeleteImageAsync(Guid imageId);
        public ApplicationDbContext UnitOfWork { get; }

    }
}
