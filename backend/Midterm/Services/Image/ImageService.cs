using Midterm.Models.DTO;
using Midterm.Models.Entity;
using Midterm.Repositories;

namespace Midterm.Services
{
    public class ImageService : IImageService
    {
        private readonly IImageRepository _imageRepository;

        public ImageService(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
        }

        public async Task<List<Image>> GetAllImagesAsync()
        {
            return await _imageRepository.GetAllImagesAsync();
        }

        public async Task<Image> UploadImage(ImageUploadedDTO imageDTO)
        {
            Image uploadedImage = await _imageRepository.UploadImageAsync(imageDTO);
            await _imageRepository.UnitOfWork.SaveChangesAsync();
            return uploadedImage;
        }
    }
}
