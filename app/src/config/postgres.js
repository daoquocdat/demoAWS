const { Sequelize } = require('Sequelize');

const sequelize = new Sequelize('demo', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    logging: false,   
});

  try {
    sequelize.authenticate();
    console.log('Connect postgres successfully.');
  } catch (error) {
    console.error('Connect postgres failed: ', error);
  }


module.exports =  sequelize;