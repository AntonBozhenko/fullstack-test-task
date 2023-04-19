const { DataTypes } = require('sequelize');

const { db } = require('../db');

const Group = require('./Group');

const Album = db.define(
  'album',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'group',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    timestamps: false,
  },
);

Album.belongsTo(Group, { foreignKey: 'groupid' });
Group.hasMany(Album, { foreignKey: 'groupid' });

module.exports = Album;
