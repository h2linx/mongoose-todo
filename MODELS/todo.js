const { Timestamp } = require("mongodb")

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        rquired:true
    },
    description:{
        type:String,
        
    },
    completed:{
        type:Boolean,
        default:false
    }

}, {timestamps:true});

const todo = mongoose.model('todo', todoSchema)
module.exports= todo;