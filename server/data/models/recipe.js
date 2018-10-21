
import Sequelize from 'sequelize';
import UserModel from './user';

const model = (sequelize) => {
    var model = sequelize.define('Recipes', {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.STRING, allowNull: false }
    });

    model.belongsTo(UserModel(sequelize), { foreignKey: 'createdById' });

    model.sync();

    return model;
}

export default model;