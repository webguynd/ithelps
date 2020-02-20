const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ticketSchema = Schema({
    title: String,
    device: String,
    description: String,
    postedBy: String
}, {timestamps: true})

module.exports = mongoose.model("Ticket", ticketSchema);