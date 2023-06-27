const bcrypt = require("bcrypt");
const uuv4_generator = require("uuid");
const jwt = require("jsonwebtoken");

/* importing User table in models folder */
const User = require("../models/users");
const { signToken } = require("../services/jwt");

/* 1. Insert a User in the User table */
const addUser = async (req, res) => {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  bcrypt.genSalt(5, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      if (err) res.status(500).send(err);
      else {
        const user = await User.create({
          firstName,
          lastName,
          emailAddress,
          phone,
          password: hash,
          apikey: uuv4_generator.v4(),
        });
        res.status(200).send(user);
      }
    });
  });
};

/* 2. Find all Users in the User table */
const getAllUsers = async (req, res) => {
  const user = await User.findAll();
  res.status(200).send(user);
};

/* 3. Find one User in the User table */
const getOneUser = async (req, res) => {
  const user = await User.findByPk(req.params.id /* , { include: Drink } */);
  res.status(200).send(user);
};

/* 4. Update a particular User based on it ID */
const updateUser = async (req, res) => {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  await User.update(
    { firstName, lastName, emailAddress, phone, password },
    { where: { id: req.params.id } }
  );
  const user = await User.findByPk(req.params.id);
  res.status(200).send(user);
};

/* 5. Delete a User based on it ID */
const deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(200).send("User is deleted !");
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { emailAddress: email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = signToken({ user_id: user.id})
      res.status(200).send({ user, token });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};

const getCurrentUser = (req, res) => {
  res.send(req.user);
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  login,
  getCurrentUser,
};
