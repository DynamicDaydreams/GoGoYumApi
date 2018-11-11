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

    let adminUserUuid = uuid();
    let swaggerUserUuid = uuid();
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
    let cannedChickenBreastUuid = uuid();
    let shreddedCheddarCheeseUuid = uuid();
    let shreddedMozzarellaCheeseUuid = uuid();
    let gratedParmesanCheeseUuid = uuid();
    let franksRedHotSauceUuid = uuid();
    let butterUuid = uuid();
    let cajunChickenRecipeUuid = uuid();
    let buffaloChickenTaquitosUuid = uuid();

    await queryInterface.bulkInsert('Users',
      [
        { id: adminUserUuid, userName: 'admin', passwordHash: '8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918', email: 'admin@admin.com', createdAt: new Date(), updatedAt: new Date() },
        { id: swaggerUserUuid, userName: 'swagger', passwordHash: '0447C783C9E903A0B8C60A93665E6F5C9159DD1F4E2D2AD0456DF83EAB7FBD2C', email: 'swagger@swagger.com', createdAt: new Date(), updatedAt: new Date() },
      ]
    );

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
        { id: chickenBreastUuid, name: 'Chicken Breast', brand: 'Generic', searchTerm: 'Chicken Breast', createdAt: new Date(), updatedAt: new Date() },
        { id: cannedChickenBreastUuid, name: 'Canned Chicken', brand: 'Generic', searchTerm: 'Canned Premium Chunk Chicken Breast', createdAt: new Date(), updatedAt: new Date() },
        { id: shreddedCheddarCheeseUuid, name: 'Shredded Cheddar Cheese', brand: 'Generic', searchTerm: 'Shredded Cheddar Cheese', createdAt: new Date(), updatedAt: new Date() },
        { id: shreddedMozzarellaCheeseUuid, name: 'Shredded Mozzarella Cheese', brand: 'Generic', searchTerm: 'Shredded Mozzarella Cheese', createdAt: new Date(), updatedAt: new Date() },
        { id: gratedParmesanCheeseUuid, name: 'Grated Parmesan Cheese', brand: 'Generic', searchTerm: 'Grated Parmesan Cheese', createdAt: new Date(), updatedAt: new Date() },
        { id: franksRedHotSauceUuid, name: 'Franks Red Hot Sauce', brand: 'Franks', searchTerm: 'Franks Red Hot Sauce', createdAt: new Date(), updatedAt: new Date() },
        { id: butterUuid, name: 'Butter', brand: 'Generic', searchTerm: 'Butter', createdAt: new Date(), updatedAt: new Date() }
      ]
    );

    await queryInterface.bulkInsert('Recipes',
      [
        { id: cajunChickenRecipeUuid, name: 'Cajun Chicken Breast', description: 'Awesome Cajun Chicken Breast', cookTimeMinutes: 0, prepTimeMinutes: 0, createdAt: new Date(), updatedAt: new Date(), createdById: adminUserUuid },
        { id: buffaloChickenTaquitosUuid, name: 'Keto Bufallo Chicken Taquitos', description: 'Awesome Keto Buffalo Chicken Taquitos', cookTimeMinutes: 0, prepTimeMinutes: 0, createdAt: new Date(), updatedAt: new Date(), createdById: adminUserUuid },
      ]
    );

    await queryInterface.bulkInsert('Ingredients',
      [
        { id: uuid(), recipeId: cajunChickenRecipeUuid, foodId: saltUuid, units: 'teaspoon', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, foodId: cayennePepperUuid, units: 'teaspoon', quantity: 0.5, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, foodId: crushedRedPepperUuid, units: 'teaspoon', quantity: 0.25, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, foodId: garlicPowderUuid, units: 'teaspoon', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, foodId: pepperUuid, units: 'teaspoon', quantity: 0.5, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, foodId: onionPowderUuid, units: 'teaspoon', quantity: 0.5, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, foodId: driedOreganoUuid, units: 'teaspoon', quantity: 0.5, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, foodId: driedThymeUuid, units: 'teaspoon', quantity: 0.5, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, foodId: chickenBreastUuid, units: 'pound', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, foodId: shreddedCheddarCheeseUuid, units: 'cup', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, foodId: shreddedMozzarellaCheeseUuid, units: 'cup', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, foodId: gratedParmesanCheeseUuid, units: 'cup', quantity: 0.5, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, foodId: cannedChickenBreastUuid, units: 'can', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, foodId: franksRedHotSauceUuid, units: 'cup', quantity: 0.25, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, foodId: butterUuid, units: 'tablespoon', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      ]
    );

    await queryInterface.bulkInsert('Steps',
      [
        { id: uuid(), recipeId: cajunChickenRecipeUuid, name: 'Preheat Oven', description: 'Preheat Oven to 450 degrees fahrenheit', ordinal: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, name: 'Grease Pan', description: 'Grease a 8x8 baking sheet or dish, set aside', ordinal: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, name: 'Mix ingredients', description: 'Mix together the salt, cayenne pepper, crused red peppers, garlic powder, paprika, pepper, onion powder, dried oregano, and dried thyme in a small ramekin. ', ordinal: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, name: 'Rub It Good', description: 'Rub the spice mix onto the chirken breasts. ', ordinal: 4, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, name: 'Get Baked', description: 'Bake for 18 minutes', ordinal: 5, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, name: 'Cover with foil', description: 'Remove chicken breasts from the oven, cover with aluminum foil, bake for another 5 minutes', ordinal: 6, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: cajunChickenRecipeUuid, name: 'Enjoy', description: 'Remove foil, plate and serve!', ordinal: 7, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Preheat Oven', description: 'Preheat Oven to 450 degrees fahrenheit', ordinal: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Melt Butter', description: 'In a mid sized bowl, melt butter', ordinal: 2, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Mix Hot Sauce', description: 'Add hot sauce to melted butter and mix.', ordinal: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Mix chicken', description: 'Stir in shredded chicken, stir until coated.', ordinal: 4, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Cook chicken mixture', description: 'Add chicken mixture into a baking dish, bake for 10 minutes', ordinal: 5, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Stir chiken', description: 'Stir the chicken to keep it from burning, then bake for another 10 minutes', ordinal: 6, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Mix cheese', description: 'In a large mixing bowl, blend cheddar, mozzarella and parmesan cheeses. ', ordinal: 7, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Divide Cheese', description: 'Divide the cheese into 6 hand pressed balls, and place on a parchment paper lined baking sheet', ordinal: 8, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Bake Cheese', description: 'Bake the cheese for 6-8 minutes, until the edges of the cheese is brown', ordinal: 9, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Remove cheese, let cool', description: 'Remove the cheese from the oven, and let cool. ', ordinal: 10, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Add chicken mixture', description: 'Make a line of chicken mixture down the middle of the cheese, and tightly roll into a cigar shape. ', ordinal: 11, createdAt: new Date(), updatedAt: new Date() },
        { id: uuid(), recipeId: buffaloChickenTaquitosUuid, name: 'Enjoy!', description: 'Plate and enjoy!', ordinal: 12, createdAt: new Date(), updatedAt: new Date() },
      ]
    );

    return;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DELETE FROM Steps', { type: Sequelize.QueryTypes.DELETE });
    await queryInterface.sequelize.query('DELETE FROM Ingredients', { type: Sequelize.QueryTypes.DELETE });
    await queryInterface.sequelize.query('DELETE FROM Food', { type: Sequelize.QueryTypes.DELETE });
    await queryInterface.sequelize.query('DELETE FROM Recipes', { type: Sequelize.QueryTypes.DELETE });
    await queryInterface.sequelize.query('DELETE FROM Users WHERE userName IN (\'admin\', \'swagger\')', { type: Sequelize.QueryTypes.DELETE });
    return;
  }
};
