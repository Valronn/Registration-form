const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emailValidation = email => {
  const check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return check.test(email);
};

const usernameValidation = username => {
  const check = /^[a-zA-Z0-9]+$/;
  return check.test(username);
};
const userRegisterSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    validate: [usernameValidation, "Please, fill a valid username"],
    match: [/^[a-zA-Z0-9]+$/, "Please, fill a valid username"]
  },

  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 8
  },

  name: {
    first: String,
    last: String,
    required: true
  },

  age: {
    type: Number,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: [emailValidation, "Please, fill a valid email adress"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please, fill a valid email adress"
    ]
  },
  image:{
      type:String,
      data:Buffer
  },
},{
      timestamps:true,    
});

const User = mongoose.model('User', userRegisterSchema);

module.exports = User;