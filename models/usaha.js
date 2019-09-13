'use strict';
module.exports = (sequelize, DataTypes) => {
  const usaha = sequelize.define('usaha', {
    id_usaha: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING,
    kota: DataTypes.INTEGER,
    detail_alamat: DataTypes.TEXT,
    no_telp: DataTypes.STRING,
    id_pengguna: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: "usaha"
  });
  usaha.associate = function(models) {
    usaha.belongsTo(models.pengguna, { foreignKey: "id_pengguna" })
    usaha.hasMany(models.produk, { foreignKey: "id_usaha" })
  };
  return usaha;
};