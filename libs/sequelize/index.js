const { Sequelize } = require('sequelize');

const urlConfig = require('../config');
const setupModels = require('../../db/index');

// const sequelize = new Sequelize(urlConfig.dev, { dialect: 'postgres' });
const sequelize = new Sequelize(urlConfig.mysql_dev, { dialect: 'mysql' });
console.log('urlConfig.dev ===>', urlConfig.mysql_dev);
setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
