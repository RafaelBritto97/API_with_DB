const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:12345@localhost:5432/node_postgres",
});

async function query(queryString, params, callback) {
  return pool.query(queryString, params, callback);
}

async function getClient() {
  return pool.connect();
}

module.exports = { query, getClient };
