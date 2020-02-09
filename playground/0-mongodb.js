// CRUD - create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name: 'Muhamad',
        age: 25
    }, (error, result) => {
        if (error) {
            console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

    db.collection('users').insertMany([
        {
            name: 'Maralia',
            age: 29
        }, {
            name: 'Gunther',
            age: 26
        }
    ], (error, result) => {
        if (error) {
            console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })

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

    db.collection('users').findOne({ _id: new ObjectID('5e2e76c316480642efab85ab') }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    const cursor = db.collection('users').find({age: 25})
    cursor.toArray((error, users) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(users)
    })
    cursor.count((error, count) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(count)
    })

    const updateOnePromise = db.collection('users').updateOne({
        _id: new ObjectID('5e2e76c316480642efab85ab')
    }, {
        $set: {
            age: 34
        }
    })

    updateOnePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    const updateManyPromise = db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    })

    updateManyPromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteMany({
        age: 26
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})