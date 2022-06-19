require('dotenv').config();

const config = {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const user = encodeURIComponent(config.user);
const password = encodeURIComponent(config.password);

const URL_CONFIG = {
  dev: `postgres://${user}:${password}@${config.host}:${config.port}/${config.database}`,
  prod: {},
};

module.exports = URL_CONFIG;
