const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Produk = sequelize.define(
    "produk", {
        id_produk: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nama: {
            type: Sequelize.STRING(50)
        },

        stok: {
            type: Sequelize.INTEGER
        },

        harga: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'produk'
    }
)

module.exports = Produk