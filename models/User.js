const mongoose = require('mongoose');
const DateOnly = require('mongoose-dateonly')(mongoose);

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    passsword:{
        type:String,
        require:true
    },
    location:{
        type:String,
    },
    post:{
        type:Number,
        default:0
    },
    activite:{
        type:Boolean,
        default:true
    },
    time : { type : DateOnly, default: Date.now }

},{timestamps:true});


const User = mongoose.model('User', UserSchema);


module.exports = User;