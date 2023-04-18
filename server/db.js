const { Pool } = require('pg');
require('dotenv').config();

exports.pool = new Pool({
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: 'localhost',
  port: 5432,
  database: 'test_task',
});
