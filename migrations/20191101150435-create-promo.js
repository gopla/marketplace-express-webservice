"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("promo", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_promo: {
        type: Sequelize.INTEGER
      },
      imageurl: {
        type: Sequelize.STRING
      },
      id_usaha: {
        type: Sequelize.INTEGER
      },
      konfirmasi: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("promo");
  }
};
