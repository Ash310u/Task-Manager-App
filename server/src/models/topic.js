const mongoose = require('mongoose')
const Task = require('./task')

const topicSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
})

topicSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'topic'
})

topicSchema.pre('remove', async function (next) {
    const topic = this

    await Task.deleteMany({ topic: topic._id })
    next()
})

const Topic = mongoose.model('Topic', topicSchema)

module.exports = Topic