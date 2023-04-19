const { DataTypes } = require('sequelize');

const { db } = require('../db');

const Group = db.define('group', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Group;
