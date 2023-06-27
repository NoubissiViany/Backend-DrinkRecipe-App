/* importing category table in models folder */
const Category = require("../models/categories");

/* 1. Insert a category in the category table */
const addCategory = async (req, res) => {
  const { name, description } = req.body;
  const category = await Category.create({ name, description });
  res.status(200).send(category);
  console.log(category);
};

/* 2. Find all categorires in the category table */
const getAllCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.status(200).send(categories);
};

/* 3. Find one category in the category table */
const getOneCategory = async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  res.status(200).send(category);
};

/* 4. Update a particular category based on it ID */
const updateCategory = async (req, res) => {
  const { name, description } = req.body;
  await Category.update(
    { name, description },
    { where: { id: req.params.id } }
  );
  const category = await Category.findByPk(req.params.id);
  res.status(200).send(category);
};

/* 5. Delete a category based on it ID */
const deleteCategory = async (req, res) => {
  const id = req.params.id;
  await Category.destroy({ where: { id: id } });
  res.status(200).send("category is deleted !");
};

module.exports = {
  addCategory,
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
};
