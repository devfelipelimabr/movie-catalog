const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(config.url);

const db = {
  sequelize,
  Sequelize,
  DataTypes,
};

const User = require('./User')(sequelize, DataTypes);
const Movie = require('./Movie')(sequelize, DataTypes);

db.User = User;
db.Movie = Movie;

module.exports = db;
