const mysql = require("mysql")
const Sequilize = require("sequelize")

const sequelize = new Sequilize('marketplace', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize