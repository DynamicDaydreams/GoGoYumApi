
import Sequelize from 'sequelize';
import RecipeModel from './recipe';

const model = (sequelize) => {
    var model = sequelize.define('Steps', {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.STRING, allowNull: false },
        ordinal: { type: Sequelize.INTEGER, allowNull: false }
    });

    model.belongsTo(RecipeModel(sequelize), { foreignKey: 'recipeId' });

    model.sync();

    return model;
}

export default model;