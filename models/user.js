const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true,
        minlength: 5,
        maxlength: 50

    },
    email:{

        type:String,
        unique:true,
        required: true,
        minlength: 5,
        maxlength: 50
    },

    password:{

        type:String,
        required: true,

    },

    isAdmin:Boolean

});


userSchema.methods.generateAuthToken = function(){

    return token = jwt.sign({_id: this._id, isAdmin:this.isAdmin}, config.get('jwtPrivateKey'));

}


const User = mongoose.Model = mongoose.model('User', userSchema);


exports.User = User;