import Sequelize from 'sequelize';

const model = (sequelize) => {
    var model = sequelize.define('Food', {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false },
        searchTerm: { type: Sequelize.STRING, allowNull: false },
        brand: { type: Sequelize.STRING, allowNull: false }
    });

    model.sync();

    return model;
}

export default model;