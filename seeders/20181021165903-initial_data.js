'use strict';


function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let saltUuid = uuid();
    let cayennePepperUuid = uuid();
    let crushedRedPepperUuid = uuid();
    let garlicPowderUuid = uuid();
    let paprikaUuid = uuid();
    let pepperUuid = uuid();
    let onionPowderUuid = uuid();
    let driedOreganoUuid = uuid();
    let driedThymeUuid = uuid();
    let chickenBreastUuid = uuid();


    await queryInterface.bulkInsert('Food',
      [
        { id: saltUuid, name: 'Salt', brand: 'Generic', searchTerm: 'Salt', createdAt: new Date(), updatedAt: new Date() },
        { id: cayennePepperUuid, name: 'Cayenne Pepper', brand: 'Generic', searchTerm: 'Cayenne Pepper', createdAt: new Date(), updatedAt: new Date() },
        { id: crushedRedPepperUuid, name: 'Crushed Red Pepper', brand: 'Generic', searchTerm: 'Crushed Red Pepper', createdAt: new Date(), updatedAt: new Date() },
        { id: garlicPowderUuid, name: 'Garlic Powder', brand: 'Generic', searchTerm: 'Garlic Powder', createdAt: new Date(), updatedAt: new Date() },
        { id: paprikaUuid, name: 'Paprika', brand: 'Generic', searchTerm: 'Paprika', createdAt: new Date(), updatedAt: new Date() },
        { id: pepperUuid, name: 'Pepper', brand: 'Generic', searchTerm: 'Pepper', createdAt: new Date(), updatedAt: new Date() },
        { id: onionPowderUuid, name: 'Onion Powder', brand: 'Generic', searchTerm: 'Onion Powder', createdAt: new Date(), updatedAt: new Date() },
        { id: driedOreganoUuid, name: 'Dried Oregano', brand: 'Generic', searchTerm: 'Dried Oregano', createdAt: new Date(), updatedAt: new Date() },
        { id: driedThymeUuid, name: 'Dried Thyme', brand: 'Generic', searchTerm: 'Dried Thyme', createdAt: new Date(), updatedAt: new Date() },
        { id: chickenBreastUuid, name: 'Chicken Breast', brand: 'Generic', searchTerm: 'Chicken Breast', createdAt: new Date(), updatedAt: new Date() }
      ]
    );

    let items = await queryInterface.sequelize.query('SELECT id, name FROM Food', { type: Sequelize.QueryTypes.SELECT });

    console.log(items);


    return;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DELETE FROM Steps', { type: Sequelize.QueryTypes.DELETE });
    await queryInterface.sequelize.query('DELETE FROM Ingredients', { type: Sequelize.QueryTypes.DELETE });
    await queryInterface.sequelize.query('DELETE FROM Food', { type: Sequelize.QueryTypes.DELETE });
    await queryInterface.sequelize.query('DELETE FROM Recipes', { type: Sequelize.QueryTypes.DELETE });
    return;
  }
};
