using Microsoft.AspNetCore.Identity;
using GoGoYumApi.Common;
using GoGoYumApi.Models.Entities;
using GoGoYumApi.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoGoYumApi.Services
{
    public class RoleService : IRoleService
    {
        private readonly RoleManager<ApplicationRole> _roleManager;

        public RoleService(RoleManager<ApplicationRole> roleManager)
        {
            _roleManager = roleManager;
        }
    }
}
