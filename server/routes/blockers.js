const express = require('express');
const router = express.Router();
const db = require('../../database/db.js');

router.get('/', (req, res) => {
// get all blockers
    db.getBlockers()
    .then ((val) => {
        console.log(val);
        // res.send('all the blockers');
        res.json(val);        
    })
    .catch((err) => res.status(400).send(err))
})

router.post('/', (req, res) => {
// create single blocker
    db.postBlocker(req.body)
    .then ((val) => {
        console.log(val);
        res.send(val);
    })
    .catch((err) => res.status(400).send(err))
})

module.exports = router;