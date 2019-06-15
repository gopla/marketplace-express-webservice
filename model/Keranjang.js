const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const DetailKeranjang = require("./DetailKeranjang");

const Keranjang = sequelize.define(
  "keranjang",
  {
    id_keranjang: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    total: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "keranjang"
  }
);

Keranjang.hasMany(DetailKeranjang, { foreignKey: "id_keranjang" });

module.exports = Keranjang;
