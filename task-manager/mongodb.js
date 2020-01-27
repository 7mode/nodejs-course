// CRUD - create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Muhamad',
    //     age: 25
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert user')
    //     }
    //
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Maralia',
    //         age: 29
    //     }, {
    //         name: 'Gunther',
    //         age: 26
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert documents')
    //     }
    //
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        }, {
            description: 'Workout',
            completed: true
        }, {
            description: 'Finish work',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            console.log('Unable to insert tasks')
        }

        console.log(result.ops)
    })
})