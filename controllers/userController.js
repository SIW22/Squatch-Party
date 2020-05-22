const express = require('express');
const router = express.Router();



const db = require('../models');


router.get('/', (req,res) =>{
    res.render('index')
})

router.get('/dashborad' , (req,res) =>{
    
    res.render('dashborad',{

    })
} )

module.exports = router