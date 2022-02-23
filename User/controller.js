const jwt = require("jsonwebtoken");
const User = require("../db/models/User");
const bcrypt = require("bcrypt");
const { JWT_EXPIRATION_MS, JWT_SECRET } = require("../config/key");

const generateToken = (newUser) => {
  const payload = {
    username: newUser.username,
    id: newUser.id,
    exp: Date.now() + JWT_EXPIRATION_MS,
  };
  const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);

  return token;
};

exports.signUp = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    const token = generateToken(user);
    return res.status(201).json({ token: token });
  } catch (error) {
    next(error);
  }
};

exports.signIn = (req, res, next) => {
  try {
    console.log("you are signed in", req.user);
    const token = generateToken(user);
    res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
};
