require('../src/db/mongoose')
const Task = require('../src/models/Task')

Task.findByIdAndDelete('5e3ec243bc666008a17541d7', { age: 1 }).then((user) => {
    console.log(user)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})