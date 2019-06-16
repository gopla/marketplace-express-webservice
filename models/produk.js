'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produk = sequelize.define('Produk', {
    id_produk: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    harga: DataTypes.INTEGER
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'produk'
  });
  Produk.associate = function(models) {
    // associations can be defined here
  };
  return Produk;
};