const mongoose = require("mongoose");
const { Schema } = mongoose;
const profileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  username: {
    type: String,
  },
  email: {
    type: String,

    unique: true,
  },

  fullName: {
    type: String,
  },
  gender: {
    type: String,
  },
  bvn: {
    type: Number,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  phoneNumber: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("Profile", profileSchema);

module.exports = User;
