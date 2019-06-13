const mysql = require("mysql")
const Sequilize = require("sequelize")

const sequelize = new Sequilize('marketplace', 'gopla', 'zaq123', {
    host: 'mysql-3029-0.cloudclusters.net',
    port: '10019',
    dialect: 'mysql'
})

module.exports = sequelize