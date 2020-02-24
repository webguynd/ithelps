const passport = require('passport')
const user = require('../models/user')
 

module.exports = {
    showRegisterPage: (req, res) => {
        res.render('register')
    },

    registerUser: (req, res) => {
        user.register(new user({username: req.body.username, email: req.body.email}), req.body.password, (err, user) => {
            if(err) {
                return res.render('register')
            }
            passport.authenticate('local')(req, res, () => {
                res.redirect('/')
            })
        })
    }
}