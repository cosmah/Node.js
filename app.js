// //step1;We’re setting a variable express that refers to the Express package and then instantiating it in another variable called app
// const express = require("express");
// const app = express();
// const port = 3000;
// const path = require('path');
// const router = express.Router() ;//use inbuilt routing function to create routes

// /*step3; We’re using Express’s get method to create our route.
//  We specify that when a visitor hits the homepage at the route /,
//   accept both a request and a response which by convention are shortened to req and res.
//    Note that these are positional arguments so you could call them x and y if you want and
//  whichever one was first would represent the request object and the second one the response object.*/
// //app.get('/', (req, res) => { // new
// //    res.send('Homepage! Hello world.');
// //  });
//  /* //route to about page
//   app.get('/about', (req, res) => { // new
//     res.send('About page. Nice.');
//   });*/
//   //route to home page
//     // app.get('/', (req, res) => { // new
//     //   res.sendFile(__dirname + '/index.html');
//     // });
 
// //add router
// app.use('/', 'router')
// =========================================================
const express = require('express');
const {resolve} = require('path');
const port = 3000;
const app = express();
const path = require("path");
const router = express.Router();

//TO VIEW PUG(setting templating engine)
app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))

router.get("/", (req,res)=>{
  res.render("employees")
})


router.get("/about", (req,res)=>{
  res.render("about",{title: "Hello",message: "How are you doing"})
})

router.get("/contact", (req,res)=>{
  res.render("contact")
})









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
app.use('/', router);
app.use('/about', router);
app.use('/contact', router);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
