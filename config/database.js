const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const config = require('./config')[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false, // Disable logging; set true for debugging queries
});

module.exports = sequelize;
