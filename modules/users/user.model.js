const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password: {
        type: String
    },
    email:{
        type:String,
        require:true
    }, dob:{
        type:Date,
        require:true
    }
},{ collection: 'user', timestamps: true })

let user = mongoose.model('user',userSchema);
module.exports = user;

