const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI,{
    dialect: 'postgres',
    sslmode: 'require'
});


module.exports = {sq:sequelize};

