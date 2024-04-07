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

router.get('/topics', auth, async (req, res) => {
    const owner = req.user._id
    try {
        const topics  = await Topic.find({ owner })
        // await req.user.populate('topics').execPopulate()
        res.send(topics)
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

router.patch('/topics/:topic_id', auth, async (req, res) => {
    if(!Object.keys(req.body) == 'title') {
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

module.exports = router