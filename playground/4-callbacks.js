// setTimeout(() => {
//     console.log('Two seconds are up!')
// }, 2000)
//
// const names = ['Muhamad', 'Saed', 'Mousa', 'Woof']
// const shortNames = names.filter((name) => {
//     return name.length >= 4
// })
//
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//
//         callback(data)
//     }, 2000)
// }
//
// geocode('Neve Shalom', (data) => {
//     console.log(data)
// })
const add = (num1, num2, callback) => {
    const sum = num1 + num2
    callback(sum)
}

add(1,4, (sum) => {
    console.log(sum)
})

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is an Error!', undefined)
        callback(undefined, [2,47,4])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})