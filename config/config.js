const Sequelize = require('sequelize');
const db = new Sequelize('plantix', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: require('mysql2'),

});
module.exports = db;