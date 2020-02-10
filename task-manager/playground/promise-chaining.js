require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

User.findByIdAndUpdate('5e3ec243bc666008a17541d7', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age: age })
    return count
}

updateAgeAndCount('5e3ec243bc666008a17541d7', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('some real id').then((count) => {
    console.log(count)
}).then((e) => {
    console.log(e)
})