const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  city: String,
  country: String
});


const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    location: {
      type: [[String]],
      default: []
    }
  })
);

module.exports = User;