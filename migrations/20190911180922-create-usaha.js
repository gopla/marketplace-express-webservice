"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("usaha", {
      id_usaha: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      kota: {
        type: Sequelize.INTEGER
      },
      nama_kota: {
        type: Sequelize.STRING
      },
      nama_provinsi: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      detail_alamat: {
        type: Sequelize.TEXT
      },
      slogan: {
        type: Sequelize.TEXT
      },
      no_telp: {
        type: Sequelize.STRING
      },
      id_pengguna: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usaha");
  }
};
