const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//
// const url = 'https://api.darksky.net/forecast/4e2d5ae5bbb9191e2a6b67d790777286/37.8267,-122.4233'
//
// request({url: url, json: true},(error, response, body) => {
//     if (error) {
//         console.log('Unable connect to weather service!')
//         console.log('error:', error); // Print the error if one occurred
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         console.log(response.body.daily.data[0].summary + ' It is currently ' +  response.body.currently.temperature)
//     }
// })

geocode('Neve Shalom', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})