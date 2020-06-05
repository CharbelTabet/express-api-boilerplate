// CALL packages
const express = require('express');
const model_name = require('../models/model_name');


// INITIALIZE routers
const router = express.Router();


// GET all "model_names"
router.get('/', async (req, res) => {
    try {
        const objects = await model_name.find();
        console.log('Got actions');
        return res.json(objects);
    }
    catch (err) {
        res.json({message: err})
    }
});

// GET a single "model_name"
router.get('/:id', async (req, res) => {
    try {
        const object = await model_name.find({ _id: req.params.id });
        res.json(object);
    }
    catch (err) {
        res.json({message: err})
    }
});

// POST a single "model_name"
router.post('/', (req, res) => {
    object = new model_name({
        title: req.body.title,
        content: req.body.content
    });
    object.save()
    .then( data => {
        res.json(data)
        console.log('Saved new object')
    })
    .catch(err => {
        res.json({message: err});
        console.log('Failed attempt to save object');
    });
});

// DELETE a single "model_name"
router.delete('/:id', async (req, res) => {
    try {
        const removed_object = await model_name.deleteOne({ _id: req.params.id });
        return res.send(removed_object)
    }
    catch (err) {
        res.json({message: err});
    }
});

// UPDATE a single "model_name"
router.put('/:id', async (req, res) => {
    try{
        const updated_object = await model_name.updateOne({ _id: req.params.id },
            { 
                $set: {
                title: req.body.title,
                content: req.body.content}
            });
        return res.json(updated_object);
    }
    catch (err) {
        res.join({message: err})
    }
});

module.exports = router;
