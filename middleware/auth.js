const jwt = require("jsonwebtoken");
const User = require("../models/users");

const authToken = async (req, res, next) => {
  const authorization = req.get("Authorization");
  const token = authorization?.split(" ").pop();
  console.log(`user token: ${token}`);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const { data } = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    const user = await User.findByPk(data.user_id);
    if (!user) return res.status(401);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send(`Invalid Token: ${token}`);
  }
};
const authApiKey = async (req, res, next) => {
  const apiKey = "dfdf7e9c-b475-41f4-b4e3-f463f5587748";

  const user = await User.findOne({ where: { apikey: apiKey } });
  if (!user) return res.status(401).send(`Invalid apiKey: ${apiKey}`);
  req.user = user;
};

module.exports = { authToken, authApiKey };
