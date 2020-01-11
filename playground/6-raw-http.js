const https = require('https')
const url = 'https://api.darksky.net/forecast/4e2d5ae5bbb9191e2a6b67d790777286/40,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
