require('dotenv').config();

const config = {
  postgres: {
    port: process.env.DB_PORT,
    user: encodeURIComponent(process.env.DB_USER),
    password: encodeURIComponent(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
  },
  mysql: {
    host: process.env.DB_HOST,
    port: encodeURIComponent(process.env.MYSQL_PORT),
    user: encodeURIComponent(process.env.MYSQL_USER),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};

// const user = encodeURIComponent(config.mysql.user);
// const password = encodeURIComponent(config.mysql.password);

const URL_CONFIG = {
  psql_dev: `postgres://${config.postgres.user}:${config.postgres.password}@${config.postgres.host}:${config.postgres.port}/${config.postgres.database}`,
  mysql_dev: `mysql://${config.mysql.user}:${config.mysql.password}@${config.mysql.host}:${config.mysql.port}/${config.mysql.database}`,
  prod: {},
};

module.exports = URL_CONFIG;
