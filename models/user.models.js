const mongoose = require("mongoose");

const bcrypt= require('bcryptjs')


const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);


UserSchema.pre('save' , function(next){


    if(!this.isModified('password')) return next();

    let hash=  bcrypt.hashSync(this.password, 8);
    this.password= hash;
    return next();

})


UserSchema.methods.checkpassword= function (password){
    return bcrypt.compareSync(password, this.password)
}


const User= mongoose.model("User", UserSchema);

module.exports= User;
