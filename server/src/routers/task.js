const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post("/:topic_id/tasks", auth, async (req, res) => {
    const owner = req.user._id
    const parent_id = req.params.topic_id

    const task = new Task({
        ...req.body,
        parent_id,
        owner
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/tasks', auth, async (req, res) => {
    const owner = req.user._id

    try {
        const task = await Task.find({ owner })
        if (!task) {
            return res.status(404).send({ error: 'Invalid Id' })
        }

        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/tasks/:id', auth, async (req, res) => {
    const owner = req.user._id
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, owner })
        if (!task) {
            return res.status(404).send({ error: 'Invalid Id' })
        }
        res.send(task)
    } catch (err) {
        res.status(500).send()
    }
})

router.patch('/:topic_id/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    const parent_id = req.params.topic_id
    const _id = req.params.id

    try {
        const task = await Task.findOne({ parent_id, _id })
        if (!task) {
            return res.status(404).send()
        }
        updates.forEach((update) => task[update] = req.body[update])
        
        await task.save()
        res.send(task)
    } catch (err) {
        res.status(500).send()
    }
})

router.delete('/:topic_id/tasks', auth, async (req, res) => {
    const parent_id = req.params.topic_id

    try {
        const deleteData = await Task.deleteMany({ parent_id })
        res.send(deleteData)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/:topic_id/tasks/:id', auth, async (req, res) => {
    const parent_id = req.params.topic_id
    const _id = req.params.id

    try {
        const task = await Task.findOneAndDelete({ _id , parent_id })
        if (!task) {
            return res.status(404).send({ error: 'Invalid Task Id'})
        }

        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router