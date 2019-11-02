"use strict";
module.exports = (sequelize, DataTypes) => {
  const promo = sequelize.define(
    "promo",
    {
      id_promo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      imageurl: DataTypes.STRING,
      id_usaha: DataTypes.INTEGER,
      konfirmasi: DataTypes.BOOLEAN
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "promo"
    }
  );
  promo.associate = function(models) {
    promo.belongsTo(models.usaha, { foreignKey: "id_usaha" });
  };
  return promo;
};
