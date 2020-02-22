const ticket = require('./routes/tickets')
const router = require('express').Router()

router.route('/tickets').get(ticket.getTickets);
router.route('/tickets/:id').get(ticket.getTicketByid);
router.route('/tickets').post(ticket.createNewTicket);
router.route('/tickets/:id/edit').get(ticket.editTicketPage);
router.route('/tickets/:id').put(ticket.editTicket);

module.exports = router