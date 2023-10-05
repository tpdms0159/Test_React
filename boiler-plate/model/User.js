const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        typeof: String,
        maxlength : 50
    },
    email : {
        typeof: String,
        trim: true, // 공백제거해줌
        unique: 1 // 필수로 입력필요
    },
    password: {
        typeof: String,
        minlength : 5,
        unique: 1
    },
    role: {
        typeof: Number,
        default: 0
    },
    image: String,
    token: {
        typeof: String
    },
    tokenExp: {
        typeof: Number
    }

})

const User = mongoose.model("User", UserSchema)
module.exports= {User}