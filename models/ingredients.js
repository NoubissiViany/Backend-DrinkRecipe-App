const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Ingredient = sequelize.define("ingredients", {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true,
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
},
{
timesstamps:true,
paranoid:true
});

module.exports = Ingredient;

