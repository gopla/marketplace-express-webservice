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
      deskripsi: DataTypes.TEXT
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "produk"
    }
  );
  produk.associate = function(models) {
    // associations can be defined here
  };
  return produk;
};
