const user = require('../models/user') 

module.exports = {
    showRegisterPage: (req, res) => {
        res.render('register')
    }
}