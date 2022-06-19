const { Pool } = require('pg');

const urlConfig = require('./config');

const pool = new Pool({
  connectionString: urlConfig.dev,
});

module.exports = pool;
