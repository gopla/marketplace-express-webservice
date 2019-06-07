const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Keranjang = sequelize.define(
    "keranjang", {
        id_user: {
            type: Sequelize.INTEGER,
        },

        id_produk: {
            type: Sequelize.INTEGER,
        },

        jumlah: {
            type: Sequelize.INTEGER,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'keranjang'
    }
)

module.exports = Keranjang