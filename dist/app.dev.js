"use strict";

var express = require('express');

var _require = require('path'),
    resolve = _require.resolve;

var port = 3000;
var app = express();

var path = require("path");

var router = express.Router(); //import routes

var employeeRoutes = require("./Routes/employeeRoutes");

var contactRoutes = require("./Routes/contactRoutes");

var aboutRoutes = require("./Routes/aboutRoutes"); //TO VIEW PUG(setting templating engine)


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); // // ===================================
// //__dirname will resolve project folder
// router.get("/", (req,res)=>(
//   res.sendFile(path.join(__dirname + "/index.html"))
// ));
// router.get("/about", (req,res)=>(
//   res.sendFile(path.join(__dirname + "/about.html"))
// ));
// //add the router
// app.use("/",router)
// app.use("/about",router)
//step2;set up a server
// Set up the server

app.use('/', employeeRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});