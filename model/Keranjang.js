const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const Produk = require("./Produk");

const Keranjang = sequelize.define(
  "keranjang",
  {
    id_keranjang: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    id_produk: {
      type: Sequelize.INTEGER
    },

    jumlah: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "keranjang"
  }
);

Keranjang.belongsTo(Produk, { foreignKey: "id_produk" });
module.exports = Keranjang;
