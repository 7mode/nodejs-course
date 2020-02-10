require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5e3ec243bc666008a17541d7', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})