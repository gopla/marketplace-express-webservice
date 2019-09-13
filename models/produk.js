"use strict";
module.exports = (sequelize, DataTypes) => {
  const produk = sequelize.define(
    "produk",
    {
      id_produk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama: DataTypes.STRING,
      stok: DataTypes.INTEGER,
      harga: DataTypes.INTEGER,
      berat: DataTypes.INTEGER,
      deskripsi: DataTypes.TEXT,
      id_usaha: DataTypes.INTEGER
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "produk"
    }
  );
  produk.associate = function(models) {
    produk.hasMany(models.detail_transaksi, {foreignKey:'id_produk'})
    produk.belongsTo(models.usaha, { foreignKey: "id_usaha" })
  };
  return produk;
};
