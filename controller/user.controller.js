const User = require("../models/user.models");

const jwt= require('jsonwebtoken');


   const newtoken =(user)=>{
    return jwt.sign({ user }, 'secret');
   }
  


const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) return res.status(400).send({ message: "user alredy exist" });

    user = await User.create(req.body);

    return res.status(201).send({ email: user.email, id: user._id });
  } catch (error) {
    res.status(500).send("something went wrong");
  }
};




const login = async (req, res) => {
  try {

       const user= await User.findOne({email: req.body.email});

       if(!user)  return res.status(404).send({message: "Invalid credentials"})


       const token= newtoken(user);

       return res.status(200).send({token: token})


  } catch (error) {
    res.status(500).send("something went wrong");
    console.log(error);
  }
};


module.exports= {
    register,
    login
}