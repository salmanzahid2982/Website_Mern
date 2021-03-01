const { response } = require("express");
const User=require("../Models/User")
const { check, validationResult } = require('express-validator');
const { json } = require("body-parser");
//var expressJwt = require('express-jwt');
//var jwt = require('jsonwebtoken');

exports.signup=(req,res)=>
{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }
    console.log(req.body);
    const user=new User(req.body)
    user.save((err,user)=>
    {  
        if(err){
            return res.status(400).json({
                err:"Not able to save user in DB"
            });
        };
        return res.json({   
                name:user.name,
                email:user.email,
                password:user.password,
                id:user._id}
            );   
    });
};