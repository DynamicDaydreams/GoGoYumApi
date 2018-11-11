
import Sequelize from 'sequelize';
import RecipeModel from './recipe';
import FoodModel from './food';

const model = (sequelize) => {
    var model = sequelize.define('Ingredients', {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true, allowNull: false },
        units: { type: Sequelize.STRING, allowNull: false },
        quantity: { type: Sequelize.INTEGER, allowNull: false }
    });

    model.belongsTo(RecipeModel(sequelize), { foreignKey: 'recipeId' });
    model.belongsTo(FoodModel(sequelize), { foreignKey: 'foodId' });

    model.sync();

    return model;
}

export default model;