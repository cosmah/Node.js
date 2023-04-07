"use strict";

//to be used to modal our data
var mongoose = require("mongoose"); //give our schema a name


var registerSchema = new mongoose.Schema({
  //tell schema what kind of data to expect
  fullname: {
    type: String,
    trim: true //trim removes blankspace after entering input, INCASE OF PASSWORD VALIDATTION i.e TO VALIDATE A SPACE CHARACTER, DONT USE TRIM

  },
  phone: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  language: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  age: {
    type: Number,
    trim: true
  }
});
module.exports = mongoose.model("Register", registerSchema);