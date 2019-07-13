"use strict";
module.exports = (sequelize, DataTypes) => {
  const detail_transaksi = sequelize.define(
    "detail_transaksi",
    {
      id_detiltransaksi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_transaksi: DataTypes.INTEGER,
      id_produk: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      jumlah: DataTypes.INTEGER,
      berat: DataTypes.INTEGER
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "detail_transaksi"
    }
  );
  detail_transaksi.associate = function(models) {
    detail_transaksi.belongsTo(models.transaksi, {
      foreignKey: "id_transaksi"
    });
    detail_transaksi.belongsTo(models.produk, { foreignKey: "id_produk" });
  };
  return detail_transaksi;
};
