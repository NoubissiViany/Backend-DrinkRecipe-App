const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Drink = sequelize.define(
  "drinks",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    recipe: DataTypes.STRING,
    isAlcholic: DataTypes.BOOLEAN,
  },
  {
    timesstamps: true,
    paranoid: true,
  }
);

module.exports = Drink;
