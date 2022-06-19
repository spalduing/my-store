const { Sequelize } = require('sequelize');

const urlConfig = require('../config');

const sequelize = new Sequelize(urlConfig.dev, { dialect: 'postgres' });

module.exports = sequelize;
