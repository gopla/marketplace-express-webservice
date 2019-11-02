"use strict";
module.exports = (sequelize, DataTypes) => {
  const kategori = sequelize.define(
    "kategori",
    {
      id_kategori: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama_kategori: DataTypes.STRING
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "keranjang"
    }
  );
  kategori.associate = function(models) {
    kategori.hasMany(models.produk, { foreignKey: "id_kategori" });
  };
  return kategori;
};
