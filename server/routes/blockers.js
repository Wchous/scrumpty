const express = require('express');
const router = express.Router();
const db = require('../../database/db.js');

router.get('/', (req, res) => {
// get all blockers
    db.getBlockers()
    .then ((val) => {
        console.log(val);
        res.send('all the blockers');        
    })
    .catch((err) => res.status(400).send(err))
})

router.post('/', (req, res) => {
// create single blocker
    db.postBlocker()
    .then ((val) => {
        console.log(val);
        res.send();
    })
    .catch((err) => res.status(400).send(err))
})

module.exports = router;