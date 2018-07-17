const express = require('express');
const router = express.Router();
const db = require('../../database/db.js')

router.get('/', (req, res) => {
// get all users
    db.getUser().then((val) => console.log(val))
    res.send('all the users');
})

router.post('/', (req, res) => {
// create single user
    db.postUser().then (val => {
        console.log(val);
        res.send(val);
    })
})

module.exports = router;