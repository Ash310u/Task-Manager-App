const mongoose = require('mongoose')
const taskSchema = require('./task')

const topicSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        trim: true
    },
    tasks:[taskSchema],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
})

const Topic = mongoose.model('Topic', topicSchema)

module.exports = Topic