/* importing Ingredients table in models folder */
const Ingredients = require("../models/ingredients");

/* 1. Insert an Ingredient in the Ingredients table */
const addIngredient = async (req, res) => {
  const { name, description } = req.body;
  const ingredient = await Ingredients.create({ name, description });
  res.status(200).send(ingredient);
  console.log(ingredient);
};

/* 2. Find all Ingredients in the Ingredients table */
const getAllIngredients = async (req, res) => {
  const ingredients = await Ingredients.findAll();
  res.status(200).send(ingredients);
};

/* 3. Find one Ingredient in the Ingredients table */
const getOneIngredient = async (req, res) => {
  const ingredient = await Ingredients.findByPk(req.params.id);
  res.status(200).send(ingredient);
};

/* 4. Update a particular Ingredient based on it ID */
const updateIngredient = async (req, res) => {
  const { name, description } = req.body;
  await Ingredients.update({ name, description },{ where: { id: req.params.id } });
  const ingredient = await Ingredients.findByPk(req.params.id);
  res.status(200).send(ingredient);
};

/* 5. Delete an Ingredient based on it ID */
const deleteIngredient = async (req, res) => {
  const id = req.params.id;
  await Ingredients.destroy({ where: { id: id } });
  res.status(200).send("Ingredient is deleted !");
};

module.exports = {
  addIngredient,
  getAllIngredients,
  getOneIngredient,
  updateIngredient,
  deleteIngredient,
};
