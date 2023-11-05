using Microsoft.AspNetCore.Mvc;
using Midterm.Models.DTO;
using Midterm.Models.Entity;
using Midterm.Services;

namespace Midterm.Controllers
{
    [Route("api/image")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IImageService _imageService;

        public ImageController(IImageService imageService)
        {
            _imageService = imageService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Image>>> GetAllImages()
        {
            try
            {
                return Ok(await _imageService.GetAllImagesAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("add")]
        public async Task<ActionResult<Image>> UploadImage([FromForm] ImageUploadedDTO imageUploadedDTO)
        {
            try
            {
                var uploadedImage = await _imageService.UploadImage(imageUploadedDTO);
                if (uploadedImage == null) return BadRequest("Upload image failed !");
                return Ok(uploadedImage);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
