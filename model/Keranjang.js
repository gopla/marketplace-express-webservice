const Sequelize = require("sequelize");
const sequelize = require("../config/db");
<<<<<<< HEAD
const DetailKeranjang = require("./DetailKeranjang");
=======
const Produk = require("./Produk");
>>>>>>> 6a72b868ebda66a19d4373ef1b340970d2d1387f

const Keranjang = sequelize.define(
  "keranjang",
  {
    id_keranjang: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

<<<<<<< HEAD
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

=======
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
>>>>>>> 6a72b868ebda66a19d4373ef1b340970d2d1387f
module.exports = Keranjang;
