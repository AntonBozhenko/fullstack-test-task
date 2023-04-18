require('dotenv').config();
const { Sequelize } = require('sequelize');

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

const sequelize = new Sequelize(`postgres://${user}:${pass}@localhost:5432/test_task`);

async function dbCheck() {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена.');
  } catch (error) {
    console.error('База не подключена.', error.message);
  }
}

module.exports = {
  sequelize,
  dbCheck,
};
