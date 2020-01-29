// CRUD - create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName);

    db.collection('tasks').findOne({ _id: new ObjectID('5e2e8a6e97e05f6073aacc0c') }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(task)
    })

    cursor = db.collection('tasks').find({ completed: true })
    cursor.toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(tasks)
    })
    cursor.count((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(tasks)
    })
})