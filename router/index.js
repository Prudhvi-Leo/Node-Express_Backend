const express = require('express')
const path = require('path')
const router = express.Router();
const validation = require('../middleware/validateUser')
const secondValidation = require('../middleware/validateYear')

router.get('/' , [validation , secondValidation ],  (req , res , next) =>{
    next("HMm")
  // res.sendFile(path.resolve(__dirname , "../index.html"));
})
    
router.get('/about' , (req , res) =>{
    res.sendFile(path.resolve(__dirname , "../about.html"))
})
    
router.get('/contact' , (req , res) =>{
    res.sendFile(path.resolve(__dirname , "../contact.html"))
 })
    

 router.get('/testViews/1' , (req , res)=>{
    res.render('dynamicFile1.ejs' , {
        title : "Dynamic File 01" ,
        Heading : "Hello prudhvi 1"

    })
})

router.get('/testViews/2' , (req , res)=>{
res.render('dynamicFile2.ejs' , {
    title : "Dynamic File 02",
    Heading : "Hello prudhvi 2"

})
})
 module.exports = {router}