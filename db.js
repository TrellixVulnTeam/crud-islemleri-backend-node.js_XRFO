const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "2532470d",
  host: "localhost",
  port: 5432,
  database: "test2"
});

module.exports = pool;