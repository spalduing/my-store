const { Client } = require('pg');

const urlConfig = require('./config');

const getConnection = async () => {
  const client = new Client({
    connectionString: urlConfig.dev,
  });
  await client.connect();
  return client;
};

module.exports = getConnection;
