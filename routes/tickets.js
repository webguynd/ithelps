const ticket = require('../models/ticket')

module.exports = {
    getTickets: (req, res) => {
        ticket.find({}).sort([['createdAt', -1]]).exec((err, ticket) => {
            if(err) {
                res.send({message: "Internal Server Error"})
            } else {
                res.render('tickets', {ticket: ticket})
            }
        })
    },

    getTicketByid: (req, res) => {
        let id = req.params.id;
        ticket.findById(id, (err, ticket) => {
            if(err) {
                res.send({message: err})
            } else {
                res.render('detail', {ticket: ticket})
            }
        });
    },

    createNewTicket: (req, res) => {
        let title = req.body.title
        let device = req.body.device
        let description = req.body.description
        let postedBy = req.body.postedBy
        ticket.create({title: title, device: device, description: description, postedBy: postedBy}, (err, ticket) => {
            if(err) {
                res.send({message: "Error occured"})
            } else {
                res.redirect('/')
            }
        })
    },

    editTicketPage: (req, res) => {
        ticket.findById(req.params.id, (err, ticket) => {
            if(err) {
                res.send({message: "Internal server error"})
            } else {
                res.render('edit', {ticket: ticket})
            }
        })
    },

    editTicket: (req, res) => {
        ticket.findByIdAndUpdate(req.params.id, req.body.ticket, (err, ticket) => {
            if(err) {
                res.send({message: "Error"})
            } else {
                res.redirect('/')
            }
        })
    }



}