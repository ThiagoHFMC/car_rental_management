const {connection, Sequelize} = require('../db/connect.js')

const Car = connection.define('cars', {
    locadora: {
        type: Sequelize.STRING,
    },
    modelo: {
        type: Sequelize.STRING,
    },
    marca: {
        type: Sequelize.STRING
    },
    ano: {
        type: Sequelize.INTEGER
    },
    motor: {
        type: Sequelize.STRING
    },
    portas: {
        type: Sequelize.INTEGER
    },
    cambio: {
        type: Sequelize.STRING
    },
    ar_condicionado: {
        type: Sequelize.BOOLEAN
    }
})

//connection.sync({force: true})

module.exports = Car