"use strict";
module.exports = (sequelize, DataTypes) => {
  const keranjang = sequelize.define(
    "keranjang",
    {
      id_keranjang: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_produk: DataTypes.INTEGER,
      jumlah: DataTypes.INTEGER
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "keranjang"
    }
  );
  keranjang.associate = function(models) {
    keranjang.belongsTo(models.produk, { foreignKey: "id_produk" });
  };
  return keranjang;
};
