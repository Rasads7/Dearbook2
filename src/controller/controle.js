const models = require('../model/usuario');

function login(req, res) {
    res.render('login.html');
}

module.exports = {
    login
}