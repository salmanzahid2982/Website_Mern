const express=require("express");
const { check, validationResult } = require('express-validator');
const router=express.Router();

const {signup}=require("../Controllers/User");

router.post("/signup",
[check("password","password should atleast 3 characters").isLength({min:3})],
[check("email","email required").isEmail()],
signup);

module.exports=router;