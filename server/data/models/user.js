import Sequelize from 'sequelize';

const model = (sequelize) => {
    var model = sequelize.define('Users', {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true },
        userName: Sequelize.STRING,
        passwordHash: Sequelize.STRING
    });

    model.sync();

    return model;
}

export default model;