const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
// get all tasks
res.send('all the tasks')
})

router.post('/', (req, res) => {
// create single task
})

module.exports = router;