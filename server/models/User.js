const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  username: {
    type: String,
   
  },
  email: {
    type: String,
    
    unique: true,
  },
  password: {
    type: String,
  
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
const User = mongoose.model("User", UserSchema);

module.exports = User;
