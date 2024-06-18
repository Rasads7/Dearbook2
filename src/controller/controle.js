const models = require('../model/usuario');

function Home(req, res) {
    res.render('Home.html');
}

module.exports = {
    Home
}