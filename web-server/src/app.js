const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express explore
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handle bars and view location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

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
        helpText: 'This is some helpful text.',
        name: 'Muhamad Najjar'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Cloudy',
        location: 'Tel Aviv'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Muhamad Najjar',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Muhamad Najjar',
        errorMessage: 'Page not found'
    })
})

const port = 3000;
app.listen(port, () => {
    console.log('Server is up in port', port)
})