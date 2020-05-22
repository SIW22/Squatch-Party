const express = require('express');
const router = express.Router();



const db = require('../models');


router.get('/', (req,res) =>{

    res.render('index')
})

router.get('/dashborad' , async (req,res) =>{
    try{
        const alluser = await db.User.find()
        console.log(alluser)
        res.render('dashborad' ,{
            user:alluser
        })
    }
    catch(err){
        res.send(err)
    }

} )

module.exports = router