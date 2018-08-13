using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GoGoYumApi.Models.Entities
{
    public class RecipeIngredient : BaseEntity
    {
        public Guid IngredientId { get; set; }
        public double Amount { get; set; }


        #region Virtuals

        [ForeignKey("IngredientId")]
        public virtual Ingredient Ingredient { get; set; }

        #endregion
    }
}
