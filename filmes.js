const Sequelize = require('sequelize');
const conn = require('./dbSeq');

const filme = conn.define('FILMES', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cod_cine: {
        type: Sequelize.INTEGER,
        allowNull: true
    }

})

module.exports = filme;