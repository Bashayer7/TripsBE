const User = require("../db/models/User");

const LS = require("passport-local").Strategy;

exports.ls = new LS(async (username, password, done) => {
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      const chPass = await bcrybt.compare(password.user.password);
      if (chPass) {
        done(null, user);
      } else {
        done(null, false);
      }
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error);
  }
});
