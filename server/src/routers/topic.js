const express = require('express');
const auth = require('../middleware/auth');
const Topic = require('../models/topic');

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
})

router.get("/topics", auth, async (req, res) => {
    
})

module.exports = router;