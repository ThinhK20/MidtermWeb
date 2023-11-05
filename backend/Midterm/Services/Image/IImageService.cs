using Midterm.Models.DTO;
using Midterm.Models.Entity;

namespace Midterm.Services
{
    public interface IImageService
    {
        public Task<Image> UploadImage(ImageUploadedDTO imageDTO);
        public Task<List<Image>> GetAllImagesAsync();
    }
}
