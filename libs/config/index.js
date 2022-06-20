require('dotenv').config();

const config = {
  postgres: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: encodeURIComponent(process.env.DB_USER),
    password: encodeURIComponent(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
  },
  mysql: {
    host: process.env.DB_HOST,
    port: process.env.MYSQL_PORT,
    user: encodeURIComponent(process.env.MYSQL_USER),
    password: encodeURIComponent(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
  },
};

const psql_url = `postgres://${config.postgres.user}:${config.postgres.password}@${config.postgres.host}:${config.postgres.port}/${config.postgres.database}`;
const mysql_url = `mysql://${config.mysql.user}:${config.mysql.password}@${config.mysql.host}:${config.mysql.port}/${config.mysql.database}`;

const URL_CONFIG = {
  psql_dev: {
    url: psql_url,
    dialect: 'postgres',
  },
  mysql_dev: {
    url: mysql_url,
    dialect: 'mysql',
  },
  prod: {},
};

module.exports = URL_CONFIG;
