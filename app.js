const express = require('express');
const {resolve} = require('path');
const port = 3000;
const app = express();
const path = require("path");
const router = express.Router();

//import routes
const employeeRoutes = require("./Routes/employeeRoutes")
const contactRoutes = require("./Routes/contactRoutes")
const aboutRoutes = require("./Routes/aboutRoutes")

//TO VIEW PUG(setting templating engine)
app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))








// // ===================================
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
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
