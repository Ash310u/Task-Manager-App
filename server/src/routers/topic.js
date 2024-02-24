const express = require("express");
const Topic = require("../models/topic");
const auth = require("../middleware/auth");

const router = new express.Router()

router.post("/topics", auth, async (req, res) => {
    const topic = new Topic({
        ...req.body,
        owner:req.user._id
    })

    try {
        await topic.save()
        res.status(201).send(topic)
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/topics/:topic_id/tasks", auth, async (req, res) => {
    const topic_id = req.params.topic_id
    
    const topic = await Topic.findOne({ _id: topic_id })
    topic?.tasks.push(req.body)

    try {
        await topic.save()
        res.status(201).send(topic)
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/topics', auth, async (req, res) => {

    try {
        await req.user.populate('topics').execPopulate()
        res.send(req.user.topics)
    } catch (err) {
        res.status(500).send()
    }
})

router.get('/topics/:topic_id', auth, async (req, res) => {
    const topic_id = req.params.topic_id

    try {
        const topic = await Topic.findOne({ _id : topic_id })
        res.send(topic)
    } catch (err) {
        res.status(500).send()
    }
})

router.get('/topics/:topic_id/tasks/:id', auth, async (req, res) => {
    const topic_id = req.params.topic_id
    const _id = req.params.id

    try {
        const topic = await Topic.findOne({ _id : topic_id })
        const task = topic.tasks.filter(task => {
            return task._id == _id
        });
        if (task.length == 0) {
            return res.status(404).send({ error: 'Invalid Id' })
        }
        res.send(task)
    } catch (err) {
        res.status(500).send()
    }
})

router.patch('/topics/:topic_id', auth, async (req, res) => {
    if(!Object.keys(req.body) === 'title') {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    const topic_id = req.params.topic_id

    try {
        const topic = await Topic.findOne({ _id : topic_id })
        if (!topic) {
            return res.status(404).send()
        }
        topic.title = req.body.title
        await topic.save()

        res.send(topic)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.patch('/topics/:topic_id/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    const topic_id = req.params.topic_id
    const _id = req.params.id

    try {
        const topic = await Topic.findOne({ _id : topic_id })
        if (!topic) {
            return res.status(404).send()
        }

        const task = topic.tasks.filter(task => {
            return task._id == _id
        });
        if (!task) {
            return res.status(404).send()
        }

        updates.forEach((update) => task[0][update] = req.body[update])
        await topic.save()

        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/topics/:topic_id', auth, async (req, res) => {
    const topic_id = req.params.topic_id

    try {
        const topic  = await Topic.findOneAndDelete({ _id: topic_id, owner: req.user._id })
        if (!topic) {
            return res.status(404).send({ error: 'Invalid Id' })
        }

        res.send(topic)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/topics/:topic_id/tasks/:id', auth, async (req, res) => {
    const topic_id = req.params.topic_id
    const _id = req.params.id

    try {
        const topic = await Topic.findOne({ _id : topic_id })
        if (!topic) {
            return res.status(404).send({ error: 'Invalid Topic Id'})
        }

        const tasks = topic.tasks.filter(task => {
            return task._id != _id
        });
        if (topic.tasks.length === tasks.length) {
            return res.status(404).send({ error: 'Invalid Task Id'})
        }

        topic.tasks = tasks
        await topic.save()

        res.send(topic)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router