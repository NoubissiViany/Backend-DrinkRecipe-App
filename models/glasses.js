const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Glass = sequelize.define("glasses", {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true,
  },
  name: DataTypes.STRING,
},
{
timesstamps:true,
paranoid:true
});

module.exports = Glass;
