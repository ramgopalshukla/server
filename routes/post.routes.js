const express= require('express');


const {getpost,createpost, updatepost , deletepost}= require("../controller/post.controller");


const postrouter= express.Router();



postrouter.get("/posts", getpost)

postrouter.post("/posts/create", createpost)
postrouter.patch("/posts/update/:postid", updatepost)
postrouter.delete("/posts/delete/:postid", deletepost)

module.exports= postrouter