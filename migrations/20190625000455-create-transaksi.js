"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("transaksi", {
      id_transaksi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total_harga: {
        type: Sequelize.INTEGER
      },
      total_berat: {
        type: Sequelize.INTEGER
      },
      ongkir: {
        type: Sequelize.INTEGER
      },
      bukti_bayar: {
        type: Sequelize.TEXT
      },
      kota_asal: {
        type: Sequelize.INTEGER
      },
      kota_tujuan: {
        type: Sequelize.INTEGER
      },
      detail_alamat: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable("transaksi");
  }
};
