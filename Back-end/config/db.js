const { Pool } = require('pg');
require('dotenv').config();

// Create a new pool instance with configuration from environment variables.
// The pool manages multiple client connections automatically.
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// We export a query function that uses the pool to run SQL commands.
module.exports = {
  query: (text, params) => pool.query(text, params),
};