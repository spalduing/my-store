const { Sequelize } = require('sequelize');

const urlConfig = require('../config');
const setupModels = require('../../db/index');

const sequelize = new Sequelize(urlConfig.psql_dev.url, {
  dialect: 'postgres',
});
console.log('urlConfig.dev ===>', urlConfig.psql_dev.url);
setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
