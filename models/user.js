const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')

const Schema = mongoose.Schema

const userSchema = Schema({
    username: String,
    email: String,
    name: String
})

userSchema.plugin(plm)

module.exports = mongoose.model('User', userSchema)