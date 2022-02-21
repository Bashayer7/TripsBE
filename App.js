const express = require("express");
// const passport = require("passport");
// const ls = require("./middleware/passport");
const ConnectDB = require("./db/database");
const tripRoutes = require("./Trips/routes");
const userRoutes = require("./User/routes");
const app = express();

app.use(express.json());
// app.use(passport.initialize());
// passport.use(ls);

//router
app.use("/api", userRoutes);
//app.use("/Trip", tripRoutes);
//midlware

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "OoOps error",
  });
});
ConnectDB();
app.listen(8000);
