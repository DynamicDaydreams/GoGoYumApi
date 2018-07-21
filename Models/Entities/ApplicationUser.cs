using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace GoGoYumApi.Models.Entities
{
    public class ApplicationUser : IdentityUser<Guid>
    {
    }
}
