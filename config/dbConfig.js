const{Sequelize} = require("sequelize")
 const sequelize = new Sequelize('drinks_api_db', 'root', '', {
  host: 'localhost',
  dialect:'mysql'
});

module.exports= sequelize