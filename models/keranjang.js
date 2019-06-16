'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keranjang = sequelize.define('Keranjang', {
    id_keranjang: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_produk: DataTypes.STRING,
    jumlah: DataTypes.INTEGER
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: "keranjang"
  });
  Keranjang.associate = function(models) {
    Keranjang.belongsTo(models.Produk, { foreignKey: "id_produk" })
  };
  return Keranjang;
};