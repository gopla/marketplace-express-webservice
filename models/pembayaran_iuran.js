"use strict";
module.exports = (sequelize, DataTypes) => {
  const pembayaran_iuran = sequelize.define(
    "pembayaran_iuran",
    {
      id_pembayaran: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      id_pengguna: DataTypes.INTEGER,
      id_iuran_wajib: DataTypes.INTEGER,
      bukti_bayar: DataTypes.TEXT
    },
    {
      freezeTableName: true,
      tableName: "pembayaran_iuran"
    }
  );
  pembayaran_iuran.associate = function(models) {
    pembayaran_iuran.belongsTo(models.iuran_wajib, {
      foreignKey: "id_iuran_wajib"
    });
    pembayaran_iuran.belongsTo(models.pengguna, {
      foreignKey: "id_pengguna"
    });
  };
  return pembayaran_iuran;
};
