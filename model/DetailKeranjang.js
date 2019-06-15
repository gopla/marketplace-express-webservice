const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Keranjang = require('./Keranjang')
const Produk = require('./Produk')

const DetailKeranjang = sequelize.define(
    "detail_keranjang", {
        id_detail_keranjang: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        id_keranjang: {
            type: Sequelize.INTEGER,
        },

        id_produk: {
            type: Sequelize.INTEGER,
        },

        jumlah:{
            type:Sequelize.INTEGER,
        },

        subtotal: {
            type: Sequelize.INTEGER,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'detail_keranjang'
    }
)

DetailKeranjang.belongsTo(Keranjang, {foreignKey : 'id_keranjang'})
DetailKeranjang.belongsTo(Produk, {foreignKey: 'id_produk'})

module.exports = DetailKeranjang