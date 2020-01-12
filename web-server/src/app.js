const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath))

// help route get
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy',
        location: 'Tel Aviv'
    })
})

const port = 3000;
app.listen(port, () => {
    console.log('Server is up in port', port)
})