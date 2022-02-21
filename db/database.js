const mongoose = require("mongoose");

const ConnectDB = async () => {
  const con = await mongoose.connect(
    "mongodb+srv://coded:coded@cluster0.cyf5q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  //addd the link
};

module.exports = ConnectDB;
