require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bparse = require('body-parser')
const mover = require('method-override')
const routes = require('./routes')
const session = require('express-session')
const passport = require('passport')
const passportLocal = require('passport-local')
const plm = require('passport-local-mongoose')
const user = require('./models/user')

//EXPRESS CONFIGURATION
const app = express()
app.set('view engine', 'ejs')
app.use(bparse.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(mover('_method'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    name: 'delicious-cookie'
}))

mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true})
//PASSPORT CONFIGURATION
app.use(passport.initialize())
app.use(passport.session())
passport.use(new passportLocal(user.authenticate()))
passport.deserializeUser(user.deserializeUser())
passport.serializeUser(user.serializeUser())

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