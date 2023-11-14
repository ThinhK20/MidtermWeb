using CloudinaryDotNet.Actions;
using Microsoft.IdentityModel.Tokens;
using Midterm.Models.Entity;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Midterm.Repositories.Auth
{
    public class AuthRepository : IAuthRepository
    {
        private readonly IConfiguration _configuration;

        public AuthRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateJwtToken(User user)
        {
            var audience = _configuration.GetSection("JwtToken:Audience").Value!;
            var issuer = _configuration.GetSection("JwtToken:Issuer").Value!;
            var claims = new List<Claim> {
                new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new(JwtRegisteredClaimNames.Aud, audience),
                new(JwtRegisteredClaimNames.Iss, issuer),
                new(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new(ClaimTypes.Email, user.Email),
                new(ClaimTypes.Name, user.Username),
                new(ClaimTypes.Role, Role.Admin.ToString())
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("JwtToken:Token").Value!));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(5),
                signingCredentials: credentials,
                issuer: issuer,
                audience: audience);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
