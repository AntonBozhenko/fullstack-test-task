require('dotenv').config();
const { Sequelize } = require('sequelize');

const { USER_NAME: user, PASSWORD: pass, DB_PORT: dbPort } = process.env;

const db = new Sequelize(`postgres://${user}:${pass}@localhost:${dbPort}/test_task`);

async function dbCheck() {
  try {
    await db.authenticate();
    console.log('База данных успешно подключена.');
  } catch (error) {
    console.error('База не подключена.', error.message);
  }
}

module.exports = {
  db,
  dbCheck,
};
