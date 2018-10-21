'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'email', 'string', { required: true });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'email');
  }
};
