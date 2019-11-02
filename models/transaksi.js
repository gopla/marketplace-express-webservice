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
      konfirmasi: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      kirim: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      selesai: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      no_resi: DataTypes.STRING,
      kota_asal: DataTypes.INTEGER,
      nama_kota_asal: DataTypes.STRING,
      kota_tujuan: DataTypes.INTEGER,
      nama_kota_tujuan: DataTypes.STRING,
      detail_alamat: DataTypes.TEXT,
      id_pengguna: DataTypes.INTEGER,
      id_usaha: DataTypes.INTEGER
    },
    {
      freezeTableName: true,
      tableName: "transaksi"
    }
  );
  transaksi.associate = function(models) {
    transaksi.hasMany(models.detail_transaksi, { foreignKey: "id_transaksi" });
    transaksi.belongsTo(models.pengguna, { foreignKey: "id_pengguna" });
    transaksi.belongsTo(models.usaha, { foreignKey: "id_usaha" });
  };
  return transaksi;
};
