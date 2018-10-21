import Sequelize from 'sequelize';

import config from '../../config'
import UserModel from './user';
import FoodModel from './food';
import RecipeModel from './recipe';
import IngredientModel from './ingredient';
import StepModel from './step';

const sequelize = new Sequelize(
    config.sequelizeConfig.database,
    config.sequelizeConfig.userName,
    config.sequelizeConfig.password,
    config.sequelizeConfig.settings);

var User = UserModel(sequelize);
var Food = FoodModel(sequelize);
var Recipe = RecipeModel(sequelize);
var Ingredient = IngredientModel(sequelize);
var Step = StepModel(sequelize);

export { User, Food, Recipe, Ingredient, Step };