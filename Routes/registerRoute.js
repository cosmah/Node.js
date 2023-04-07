const express = require('express');
const router = express.Router();
const Register = require('../Models/registerModel')//import mod3l

router.get("/register", (req,res)=>{
    res.render("register")
  })




//create a post route to send data to backend
//the action name in the form is the one we use in the post route
router.post('/register', async(req,res)=>{
    try{
        const register = new Register(req.body);
        await register.save()
        res.redirect('/students')//redirect to a path, render a file
        console.log(req.body)
    }
    catch(err){
        console.log(err)
        //res.status(400).render("/")
    }
})

//read data via students.pug
router.get("/students", async(req,res)=>{
    try{
        let items = await Register.find();//go to our collection 'Register', find every record and store them in a variable items.       
        //console.log(items)
        res.render("students",{students:items}) 
    }
    catch(err){
        console.log(err)
        res.send('Failed to retrieve student details')
    }
  });

//delete functionality
router.post('/students/delete', async(req,res)=>{
    try{
        await Register.deleteOne({_id:req.body.id});
        res.render('back') //this line keeps us on our operating page
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router