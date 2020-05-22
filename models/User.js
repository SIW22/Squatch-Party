const mongoose = require('mongoose');

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
    Locations:{
        type:String
    }

});


const User = mongoose.model('User', UserSchema);

module.exports = User;