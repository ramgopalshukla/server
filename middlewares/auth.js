

const jwt= require('jsonwebtoken');


const authenticate= (req, res, next)=>{


    const token= req.headers?.authorization?.split(" ")[1]



    if(token){
        const decoded= jwt.verify(token, 'secret')

        if(decoded) {
             next()
        }
    }else{
        res.send("please login")
    }
}

module.exports= authenticate