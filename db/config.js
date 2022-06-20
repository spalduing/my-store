const url_config = require('../libs/config');

module.exports = {
  development: {
    url: url_config.psql_dev.url,
    dialiect: url_config.psql_dev.dialect,
  },
  production: {
    url: url_config.psql_dev.url,
    dialiect: url_config.psql_dev.dialect,
  },
};
