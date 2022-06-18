const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'user',
  password: '12345',
  database: 'my_store',
});

module.exports = pool;
