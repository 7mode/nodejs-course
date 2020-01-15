const path = require('path')
const express = require('express')

const app = express()

// Define paths for express explore
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates');

// Setup handle bars and view location
app.set('view engine', 'hbs')
app.set('views', viewPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Muhamad Najjar'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Muhamad Najjar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text.'
    })
})

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