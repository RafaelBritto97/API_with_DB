const { Pool } = require("pg");
const dbPass = process.env.DB_PASS;
const pool = new Pool({
  connectionString: `postgresql://postgres:${dbPass}@localhost:5432/node_postgres`,
});

async function query(queryString, params, callback) {
  return pool.query(queryString, params, callback);
}

async function getClient() {
  return pool.connect();
}

module.exports = { query, getClient };
