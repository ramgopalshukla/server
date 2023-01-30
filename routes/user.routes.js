
const express= require('express');


const {login , register}= require("../controller/user.controller");


const userrouter= express.Router();



userrouter.post("/users/register", register)

userrouter.post("/users/login", login)

module.exports= userrouter