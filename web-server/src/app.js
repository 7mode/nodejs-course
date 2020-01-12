const express = require('express')

const app = express()

// base route get
app.get('', (req, res) => {
    res.send('Hello Client Side :O')
})

// help route get
app.get('/help', (req, res) => {
    res.send('Help Page')
})
// about route get
app.get('/about', (req, res) => {
    res.send('About page')
})

// help route get
app.get('/weather', (req, res) => {
    res.send('weather')
})

const port = 3000;
app.listen(port, () => {
    console.log('Server is up in port', port)
})