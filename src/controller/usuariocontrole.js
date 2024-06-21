const Usuario = require('../model/usuario');

async function cadastrarUsuario(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome
    };

    try {
        await Usuario.create(usuario);
        res.redirect('/?sucesso=true');
    } catch (err) {
        console.log(err);
        res.redirect('/?erro=true');
    }
}

async function atualizarUsuario(req, res) {
    if (!req.session.usuario) {
        return res.redirect('/login.html');
    }

    const userId = req.session.usuario.id;

    let novosDados = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome
    };

    try {
        await Usuario.update(novosDados, {
            where: { id: userId }
        });
        req.session.usuario = { ...req.session.usuario, ...novosDados };
        res.redirect('/?atualizado=true');
    } catch (err) {
        console.log(err);
        res.redirect('/?erro_atualizacao=true');
    }
}

module.exports = {
    cadastrarUsuario,
    atualizarUsuario
}