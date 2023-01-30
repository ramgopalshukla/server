
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);


const connect= ()=>{
      
    return (mongoose.connect('mongodb+srv://unitevaluation:evaluation_123@cluster0.cy5trsr.mongodb.net/evaluationdata?retryWrites=true&w=majority'));
}

module.exports= connect