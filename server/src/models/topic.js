const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
    title: {
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
    foreignField: 'parent_id'
})

const Topic = mongoose.model('Topic', topicSchema)

module.exports = Topic