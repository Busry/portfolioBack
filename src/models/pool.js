// connecting to pg pools
const { Pool } = require('pg');

let config = {
  host: 'localhost',
  user: 'portfolio',
  password: 'portfolio',
  database: 'portfolio',
};

if (process.env.NODE_ENV === 'production') {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const pool = new Pool(config);
module.exports = pool;
