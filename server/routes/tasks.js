const express = require('express');
const router = express.Router();
const db = require('../../database/db.js')

router.get('/', (req, res) => {
// get all tasks
    db.getTasks()
    .then(val => {
        console.log(val)
        // res.send('all the tasks');
        res.json(val);
    })
    .catch((err) => res.status(400).send(err))
});

router.post('/', (req, res) => {
// create single task
    db.postTasks(req.body)
    .then(val => {
        console.log(val);
        res.send(val);
    })
    .catch((err) => res.status(400).send(err))
});

router.put('/', (req, res) => {
    db.updateTask(req.body)
    .then(val => {
        console.log(val);
        res.send(val);
    })
    .catch((err) => res.status(400).send(err))
});

module.exports = router;