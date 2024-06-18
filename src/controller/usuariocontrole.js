const Usuario = require('../model/usuario');

function cadastrarUsuario(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome
    }
    
    Usuario.create(usuario).then(()=>{
        let sucesso = true;
        res.render("Home.html", {sucesso});
    }).catch((err)=>{
        console.log(err);
        let erro = true;
        res.render("login.html", {erro});
    });

}

module.exports = {
    cadastrarUsuario
}