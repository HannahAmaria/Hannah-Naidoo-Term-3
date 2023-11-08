const express = require('express')

const WatchSchema = require('../models/watchbands')

const OrderSchema = require('../models/orders')

const router = express();

//Read all
router.get('/api/watchbands', async (req, res) => {
    const findWatch = await WatchSchema.find()
    res.json(findWatch)
})

router.get('/api/getorders', async (req, res) => {
    const findOrder = await OrderSchema.find()
    res.json(findOrder)
})

//Read Single
router.get('/api/readwatch/:id', async (req, res) => {
    const findWatch = await WatchSchema.findById(req.params.id)
    res.json(findWatch)
})

//Create
router.post('/api/createwatch', async (req, res) => {
    const watch = new WatchSchema({ ...req.body })
    await watch.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.post('/api/createorder', async (req, res) => {
    const watch = new OrderSchema({ ...req.body })
    await watch.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Update
router.put('/api/updatewatch/:id', async (req, res) => {
    const { id } = req.params.id;
    await WatchSchema.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/deletewatch/:id', async (req, res) => {
    await WatchSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.delete('/api/deleteorder/:id', async (req, res) => {
    await OrderSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;