const express= require('express')
const connect= require('./configs/db')
const cors= require('cors')
const userrouter= require('./routes/user.routes')
const postrouter= require('./routes/post.routes')
const authenticate= require('./middlewares/auth')
const app= express();




app.use(express.json());
app.use(cors())

app.use('/', userrouter)
app.use(authenticate)
app.use('/', postrouter)

const port= 3035;

app.listen(port, async(req, res)=>{
          
  try{
       await connect()
       console.log(`listening server on https://localhost:${port}`);
  } catch(err){
        
    console.log(err.message);
  }



})

