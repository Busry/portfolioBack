// connecting to pg pools
const { Pool } = require('pg');

const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

// const config = {
//   host: 'localhost',
//   user: 'portfolio',
//   password: 'portfolio',
//   database: 'portfolio',
// };

const pool = new Pool(config);
module.exports = pool;
