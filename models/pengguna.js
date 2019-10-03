"use strict";
module.exports = (sequelize, DataTypes) => {
  const pengguna = sequelize.define(
    "pengguna",
    {
      id_pengguna: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        
        unique: true
      },
      password: DataTypes.STRING,
      keanggotaan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      bukti_bayar: {
        type: DataTypes.TEXT,
        defaultValue: null
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "pengguna"
    }
  );
  pengguna.associate = function(models) {
    pengguna.hasMany(models.keranjang, { foreignKey: "id_pengguna" })
    pengguna.hasOne(models.usaha, { foreignKey: "id_pengguna" })
    pengguna.hasMany(models.transaksi, { foreignKey: "id_pengguna" })
  };
  return pengguna;
};
