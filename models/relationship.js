const sequelize = require("../config/dbConfig");
const Category = require("./categories");
const Drink = require("./drinks");
const Glass = require("./glasses");
const Ingredient = require("./ingredients");
const User = require("./users")
function relate() {
    sequelize.sync()
    User.hasMany(Drink);
    Drink.belongsTo(User);

    Drink.belongsToMany(Category,{through:"drink_categories"});
    Category.belongsToMany(Drink,{through:"drink_categories"});

    Drink.belongsToMany(Ingredient,{through:"drink_ingredients"});
    Ingredient.belongsToMany(Drink,{through:"drink_ingredients"});

    Drink.belongsToMany(Glass,{through:"drink_glasses"});
    Glass.belongsToMany(Drink,{through:"drink_glasses"});
    sequelize.sync()
}

module.exports = relate