require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const blockers = require('./routes/blockers');
const users = require('./routes/users');
const tasks = require('./routes/tasks');


app.use(bodyParser.json());
app.use('/users', users);
app.use('/tasks', tasks);
app.use('/blockers', blockers);

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get
app.listen(process.env.PORT, () => console.log('listening on 3000'));