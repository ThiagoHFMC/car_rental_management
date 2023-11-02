const sequelize = require('sequelize')
const Sequelize = sequelize.Sequelize

const connection = new Sequelize(
    'testing',
    'root',
    'ANSKk08aPEDbFjDO',
    {
        dialect: "mysql",
        host: 'localhost',
    port: 3307
    }
);

module.exports = {connection, Sequelize}