require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bparse = require('body-parser')
const routes = require('./routes')

//EXPRESS CONFIGURATION
const app = express()
app.set('view engine', 'ejs')
app.use(bparse.urlencoded({extended: true}))
mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true})

//IMPORT ROUTES HERE
app.use('/api', routes);

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/new', (req, res) => {
    res.render('new')
})

//START SERVER
app.listen(process.env.API_PORT, () => {
    console.log('server is running')
})