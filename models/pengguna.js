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
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      keanggotaan: DataTypes.BOOLEAN
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "pengguna"
    }
  );
  pengguna.associate = function(models) {
    // associations can be defined here
  };
  return pengguna;
};
