using System.Threading.Tasks;
using GoGoYumApi.Models.Entities;
using Microsoft.AspNetCore.Identity;
using GoGoYumApi.Models.ApiModels;

namespace GoGoYumApi.Services.Contracts
{
    public interface IUserService
    {
        Task<ApplicationUser> GetCurrentUser();

        ApplicationUser GetUser(string userName);

        Task<IdentityResult> CreateUser(ApplicationUser user, string password);

        Task<IdentityResult> UpdateUser(ApplicationUser user);
    }
}