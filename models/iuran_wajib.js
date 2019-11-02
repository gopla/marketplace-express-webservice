"use strict";
module.exports = (sequelize, DataTypes) => {
  const iuran_wajib = sequelize.define(
    "iuran_wajib",
    {
      id_iuran_wajib: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      bulan: DataTypes.INTEGER,
      tahun: DataTypes.INTEGER,
      jumlah: DataTypes.INTEGER
    },
    {
      freezeTableName: true,
      tableName: "iuran_wajib"
    }
  );
  iuran_wajib.associate = function(models) {
    iuran_wajib.hasMany(models.pembayaran_iuran, {
      foreignKey: "id_iuran_wajib"
    });
  };
  return iuran_wajib;
};
