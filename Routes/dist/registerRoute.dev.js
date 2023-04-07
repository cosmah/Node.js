"use strict";

var express = require('express');

var router = express.Router();

var Register = require('../Models/registerModel'); //import mod3l


router.get("/register", function (req, res) {
  res.render("register");
}); //create a post route to send data to backend
//the action name in the form is the one we use in the post route

router.post('/register', function _callee(req, res) {
  var register;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          register = new Register(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(register.save());

        case 4:
          res.redirect('/students'); //redirect to a path, render a file

          console.log(req.body);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0); //res.status(400).render("/")

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //read data via students.pug

router.get("/students", function _callee2(req, res) {
  var items;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Register.find());

        case 3:
          items = _context2.sent;
          //go to our collection 'Register', find every record and store them in a variable items.       
          //console.log(items)
          res.render("students", {
            students: items
          });
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.send('Failed to retrieve student details');

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //delete functionality

router.post('/students/delete', function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Register.deleteOne({
            _id: req.body.id
          }));

        case 3:
          res.render('back'); //this line keeps us on our operating page

          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
module.exports = router;