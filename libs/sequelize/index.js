const { Sequelize } = require('sequelize');

const urlConfig = require('../config');
const setupModels = require('../../db/index');

const sequelize = new Sequelize(urlConfig.dev, { dialect: 'postgres' });

setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
