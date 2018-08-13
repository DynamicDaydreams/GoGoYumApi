using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GoGoYumApi.Models.Entities
{
    public class Ingredient : BaseEntity
    {
        public string Name { get; set; }
        public string Brand { get; set; }
        public string BarcodeNumber { get; set; }
        public string QuantityMeasurement { get; set; }
    }
}
