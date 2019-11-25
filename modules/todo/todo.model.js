const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let todoSchema = mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    taskName:{
        type:String,
        require:true
    },
    priority: {
        type: String,
        require:true
    },
    startDate:{
        type:Date,
        require:true
    }, endDate:{
        type:Date,
        require:true
    },
    comments:{
        type:String
    }
},{ collection: 'todo', timestamps: true })

let todo = mongoose.model('todo',todoSchema);
module.exports = todo;

