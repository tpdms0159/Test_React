const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        
    },
    email : {
        type: String,
        trim: true, // 공백제거해줌
        unique: 1 // 필수로 입력필요
    },
    password: {
        type: String,
        minlength : 5,
        unique: 1
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }

})

const User = mongoose.model("User", UserSchema)
module.exports= {User}