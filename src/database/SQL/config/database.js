require('dotenv').config();

module.exports = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  host: process.env.SQL_SERVER,
  dialect: 'mysql',
};
