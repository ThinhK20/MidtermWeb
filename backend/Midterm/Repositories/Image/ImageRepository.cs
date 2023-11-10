using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.EntityFrameworkCore;
using Midterm.Data;
using Midterm.Models;
using Midterm.Models.DTO;
using Midterm.Models.Entity;

namespace Midterm.Repositories
{
    public class ImageRepository : IImageRepository
    {
        private readonly IConfiguration _configuration;
        private CloudinarySettings _cloudinarySettings;
        private Cloudinary _cloudinary;
        private readonly ApplicationDbContext _dbContext;
        public ImageRepository(IConfiguration configuration, ApplicationDbContext applicationDbContext)
        {
            _configuration = configuration;
            _cloudinarySettings = _configuration.GetSection("CloudinarySettings").Get<CloudinarySettings>()!;
            Account account = new Account(_cloudinarySettings.CloudName, _cloudinarySettings.ApiKey, _cloudinarySettings.ApiSecret);
            _cloudinary = new Cloudinary(account);
            _dbContext = applicationDbContext;
        }

        public ApplicationDbContext UnitOfWork => _dbContext;

        public async Task<Image> UploadImageAsync(ImageUploadedDTO uploadedImage)
        {
            try
            {
                var file = uploadedImage.File;
                ImageUploadResult uploadResult = new ImageUploadResult();
                if (file.Length > 0)
                {
                    using (var stream = file.OpenReadStream())
                    {
                        var uploadParams = new ImageUploadParams()
                        {
                            File = new FileDescription(file.Name, stream)
                        };
                        uploadResult = _cloudinary.Upload(uploadParams);
                    }
                }

                Image imageResult = new Image
                {
                    Description = uploadedImage.Description,
                    Url = uploadResult.Url.ToString(),
                    PublicId = uploadResult.PublicId,
                };

                await _dbContext.Images.AddAsync(imageResult);
                return imageResult;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public async Task<List<Image>> GetAllImagesAsync()
        {
            return await _dbContext.Images.ToListAsync();
        }

        public async Task<bool> DeleteImageAsync(Guid imageId)
        {
            try
            {
                var image = await _dbContext.Images.FirstOrDefaultAsync(value => value.Id == imageId);
                if (image is null)
                {
                    return false;
                }
                List<string> deletePublicIds = new List<string>();
                deletePublicIds.Add(image.PublicId);
                await _cloudinary.DeleteResourcesAsync(deletePublicIds.ToArray());
                _dbContext.Remove(image);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
