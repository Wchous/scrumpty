const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
// get all blockers
res.send('all the blockers');
})

router.post('/', (req, res) => {
// create single blocker
})

module.exports = router;