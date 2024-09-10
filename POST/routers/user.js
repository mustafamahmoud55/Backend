const User= require('../models/user')
const express=require('express')
const routers=express.Router()



routers.post('/users',(req,res)=>{
    const user=new User(req.body)
    user.save()
    .then((user)=>{
        res.status(200).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

module.exports=routers
