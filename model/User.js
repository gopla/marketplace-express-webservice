const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define(
    "user", {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nama: {
            type: Sequelize.STRING(50),
        },

        username: {
            type: Sequelize.STRING(20),
        },

        password: {
            type: Sequelize.STRING(20),
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "user"
    }
)

module.exports = User