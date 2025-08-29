// config/db.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",      
  host: "localhost",      
  database: "SmartPreaparation_AI",    
  password: "Het@5506",
  port: 5432,
});

module.exports = pool;
