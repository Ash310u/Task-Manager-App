const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Topic',
        required:true
    }
}, {
    timestamps:true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task;