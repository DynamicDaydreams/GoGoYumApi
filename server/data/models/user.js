import Sequelize from 'sequelize';

const model = (sequelize) => {
    var model = sequelize.define('Users', {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true },
        userName: { type: Sequelize.STRING, required: true },
        passwordHash: { type: Sequelize.STRING, required: true },
        email: { type: Sequelize.STRING, required: true }
    });

    model.sync();

    return model;
}

export default model;