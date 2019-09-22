"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("transaksi", {
      id_transaksi: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
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
      nama_kota_asal: {
        type: Sequelize.STRING
      },
      kota_tujuan: {
        type: Sequelize.INTEGER
      },
      nama_kota_tujuan: {
        type: Sequelize.STRING
      },
      detail_alamat: {
        type: Sequelize.TEXT
      },
      id_usaha: {
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
    return queryInterface.dropTable("transaksi");
  }
};
