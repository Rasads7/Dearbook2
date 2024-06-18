const Usuario = require('../model/usuario');

async function autenticar(req, res){
    const usuario = await Usuario.findOne({ where: {
        email: req.body.email, 
        senha: req.body.senha}
    });
    if(usuario !== null){
        req.session.autorizado = true;
        req.session.usuario = usuario;
        res.redirect('/Home.html');
    }
    else{
        let erro_autenticacao = true;
        res.render('login.html', {erro_autenticacao});
    }
}

function verificarAutenticacao(req, res, next) {
    if(req.session.autorizado){
        console.log("usuário autorizado");
        next();
    }
    else{
        console.log("usuário NÃO autorizado");
        res.redirect('/login.html');
    }   
}

function sair(req, res) {
    req.session.destroy();
    res.redirect('/login.html');
}

module.exports = {
    autenticar,
    verificarAutenticacao,
    sair
}