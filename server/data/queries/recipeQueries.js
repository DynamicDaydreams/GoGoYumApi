import { Recipe, Ingredient } from '../models';

const getRecipes = async () => {
    let recipes = await Recipe.findAll();
    return recipes;
}

const getRecipeById = async id => {
    let recipe = await Recipe.findOne({
        where: { id },
        include: [Ingredient]
    });
    return recipe;
}

export { getRecipes, getRecipeById };