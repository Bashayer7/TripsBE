const express = require("express");
const passport = require("passport");
const router = express.Router();
const { signUp, signIn } = require("./controller");

router.post("/signup", signUp);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signIn
);
module.exports = router;
