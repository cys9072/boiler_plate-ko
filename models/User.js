const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },

    email: {
        type:String,
        trim:true,
        unique:1
    },

    password: {
        type:String,
        minlength:5
    },

    lastname: {
        type:String,
        maxlength:50
    },

    role: {
        // 어떤 유저가 관리자 또는 일반 유저가 될 수 있는거 구분하는거임
        type:Number,
        default:0
    },
    img: String,

    // 유효성
    token:{
        type:String
    },

    // 토큰의 유효기간
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('User, userSchema')

module.exports = {User}