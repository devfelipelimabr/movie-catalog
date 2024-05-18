// config/create-db.js
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const db = require('../models');

// Read model files from the models directory and initialize models
const modelsDir = path.join(__dirname, '../models');
fs.readdirSync(modelsDir)
  .filter(file => file.endsWith('.js') && file !== 'index.js')
  .forEach(file => {
    const modelPath = path.join(modelsDir, file);
    const model = require(modelPath)(db.sequelize, db.Sequelize.DataTypes);
    db[model.name] = model;
  });

// Define associations between models if necessary
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

// Synchronize the database with models
(async () => {
  try {
    await db.sequelize.sync({ alter: true }); // Use { alter: true } only in development environment
    console.log('Database synchronization success.');
  } catch (error) {
    console.error('Error synchronizing database: ', error);
  } finally {
    process.exit();
  }
})();
