const mongoose = require("mongoose");

// creating the schema --> what fields we want schema to have 
const userSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

// for use outside of this file
module.exports = User;
