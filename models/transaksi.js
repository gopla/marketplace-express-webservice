"use strict";
module.exports = (sequelize, DataTypes) => {
  const transaksi = sequelize.define(
    "transaksi",
    {
      id_transaksi: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      total_harga: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      total_berat: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      ongkir: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      bukti_bayar: {
        type: DataTypes.TEXT,
        defaultValue: null
      },
      kota_asal: DataTypes.INTEGER,
      kota_tujuan: DataTypes.INTEGER,
      detail_alamat: DataTypes.TEXT,
      id_pengguna: DataTypes.INTEGER
    },
    {
      freezeTableName: true,
      tableName: "transaksi"
    }
  );
  transaksi.associate = function(models) {
    transaksi.hasMany(models.detail_transaksi, { foreignKey: "id_transaksi" })
    transaksi.belongsTo(models.pengguna, { foreignKey: "id_pengguna" })
  };
  return transaksi;
};
