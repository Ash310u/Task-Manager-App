const express = require("express");
const Task = require('../models/task');
const auth = require("../middleware/auth");

const router = new express.Router()


router.post("/tasks", auth, async (req, res) => {

    const task = new Task({
        ...req.body,
        topic:req.topic._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (err) {
        res.status(400).send(err);
    }
});

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=10
// GET /tasks?sortBy=createdAt_desc (we can use special character like "_",":" can be uasble before descending/ascending) [ for ascending order it would "1" & for descending order it would be "-1"]
router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    if (req.query.sortBy) {
        console.log(req.query.sortBy)
        // break up the sortBy value using split with the special character "_"
        const parts = req.query.sortBy.split('_')
        console.log(parts)
        // using braket notation to create "sort object"
        sort[parts[0]] =  parts[1] === 'desc' ? -1 : 1 // setting up a ternary operator
    }

    try {
        // const tasks = await Task.find({topic: req.topic._id})
        // alternative
        await req.topic.populate({
            path: 'tasks',
            match,
            options: {
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
                // sort property
                sort
            }
        }).execPopulate()
        res.send(req.topic.tasks)
    } catch (err) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, topic: req.topic._id })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (err) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    const _id = req.params.id
    try {
        const task = await Task.findOne({ _id, topic: req.topic._id })
        if (!task) {
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOneAndDelete({ _id, topic: req.topic._id })

        if (!task) {
            return res.status(404).send({ error: 'Invalid Id' })
        }

        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router