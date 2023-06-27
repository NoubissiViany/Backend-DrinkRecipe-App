/* importing Drink table in models folder */
const Drink = require("../models/drinks");

/* 1. Insert a Drink in the Drink table */
const addDrink = async (req, res) => {
  const { name, description, imageUrl, recipe, user_id, isAlcoholic } =
    req.body;
  const drink = await Drink.create({
    name,
    description,
    imageUrl,
    recipe,
    user_id,
    isAlcoholic,
  });
  res.status(200).send(drink);
  console.log(Drink);
};

/* 2. Find all Drinks in the Drink table */
const getAllDrinks = async (req, res) => {
  const drinks = await Drink.findAll();
  res.status(200).send(drinks);
};

/* 3. Find one Drink in the Drink table */
const getOneDrink = async (req, res) => {
  const drink = await Drink.findByPk(req.params.id);
  res.status(200).send(drink);
};

/* 4. Update a particular Drink based on it ID */
const updateDrink = async (req, res) => {
  const { name, description, imageUrl, recipe } = req.body;
  await Drink.update(
    { name, description, imageUrl, recipe },
    { where: { id: req.params.id } }
  );
  const drink = await Drink.findByPk(req.params.id);
  res.status(200).send(drink);
};

/* 5. Delete a Drink based on it ID */
const deleteDrink = async (req, res) => {
  const id = req.params.id;
  await Drink.destroy({ where: { id: id } });
  res.status(200).send("Drink is deleted !");
};

module.exports = {
  addDrink,
  getAllDrinks,
  getOneDrink,
  updateDrink,
  deleteDrink,
};
