const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }, phone:{
        type:Number,
        require:true
    }, status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    }
},{ collection: 'user', timestamps: true })

let user = mongoose.model('user',userSchema);
module.exports = user;

