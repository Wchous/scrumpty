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

module.exports.postUser = (userObj) => {
    // {
    //     username: 'george',                   
    //     password: 'george'
    // }
    return knex('users').insert(userObj)
};

module.exports.getTasks = () => {
    return knex.select('*').from('tasks');
}

module.exports.postTasks = (taskObj) => {
    // {
    //     title: 'Add a feature',
    //     description: 'Add a really really hard feature'
    // }
    return knex('tasks').insert(taskObj)
}

module.exports.updateTask = (taskObj) => {
    return knex('tasks')
        .where({id: taskObj.id})
        .update(taskObj);
}

module.exports.getBlockers = () => {
    return knex.select('*').from('blockers');
}

module.exports.postBlocker = (blockerObj) => {
    // {
    //     title:'Broken',
    //     description:'This is hard',
    //     task_id: 1000
    // }
    return knex('blockers').insert(blockerObj)
}