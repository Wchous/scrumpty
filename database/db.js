require('dotenv').config()

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBDATABASE
    }
});

module.exports.getUser = () => {
    return knex.select('*').from('users');
};

module.exports.postUser = () => {
    return knex('users').insert({
        username: 'george',                   //Update to pass in object
        password: 'george'
    })
};

module.exports.getTasks = () => {
    return knex.select('*').from('tasks');
}

module.exports.postTasks = () => {
    return knex('tasks').insert({
        title: 'Add a feature',
        description: 'Add a really really hard feature'
    })
}

module.exports.updateTask = () => {
    return knex('tasks').where({
        id: 1000
    }).update({
        difficulty: 1                           //Update to pass in an object from the function argument
    })
}

module.exports.getBlockers = () => {
    return knex.select('*').from('blockers');
}

module.exports.postBlocker = () => {
    return knex('blockers').insert({
        title:'Broken',
        description:'This is hard',
        task_id: 1000
    })
}