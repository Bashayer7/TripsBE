const jwt = require("jsonwebtoken");
const User = require("../db/models/User");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    const payload = {
      username: user.username,
      id: user.id,
      exp: Date.now() + 900000,
    };
    const token = jwt.sign(payload, "asupersecretkey");
    res.status(201).json({ token: token });
  } catch (error) {
    next(error);
  }
};

exports.signIn = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
