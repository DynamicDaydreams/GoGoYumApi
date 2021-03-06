import Sequelize from 'sequelize';

const model = (sequelize) => {
    var model = sequelize.define('Users', {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true, allowNull: false },
        userName: { type: Sequelize.STRING, allowNull: false },
        passwordHash: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false }
    });

    model.sync();

    return model;
}

export default model;