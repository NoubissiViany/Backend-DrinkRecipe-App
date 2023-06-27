/* importing Glasses table in models folder */
const Glasses = require("../models/glasses");

/* 1. Insert a Glass in the Glasses table */
const addGlass = async (req, res) => {
  const { name } = req.body;
  const glass = await Glasses.create({ name });
  res.status(200).send(glass);
  console.log(Glasses);
};

/* 2. Find all Glasses in the Glasses table */
const getAllGlasses = async (req, res) => {
  const glasses = await Glasses.findAll();
  res.status(200).send(glasses);
};

/* 3. Find one Glass in the Glasses table */
const getOneGlass = async (req, res) => {
  const glass = await Glasses.findByPk(req.params.id);
  res.status(200).send(glass);
};

/* 4. Update a particular Glass based on it ID */
const updateGlass = async (req, res) => {
  const { name } = req.body;
  await Glasses.update({ name }, { where: { id: req.params.id } });
  const glass = await Glasses.findByPk(req.params.id);
  res.status(200).send(glass);
};

/* 5. Delete a Glass based on it ID */
const deleteGlass = async (req, res) => {
  const id = req.params.id;
  await Glasses.destroy({ where: { id: id } });
  res.status(200).send("Glasses is deleted !");
};

module.exports = {
  addGlass,
  getAllGlasses,
  getOneGlass,
  updateGlass,
  deleteGlass,
};
