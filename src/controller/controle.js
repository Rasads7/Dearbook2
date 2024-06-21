const models = require('../model/usuario');

function login(req, res) {
    const { sucesso, erro, atualizado, erro_atualizacao } = req.query;
    res.render('login.html', { sucesso, erro, atualizado, erro_atualizacao });
}

module.exports = {
    login
}