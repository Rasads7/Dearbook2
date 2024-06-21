const express = require('express');
const router = express.Router();
const usuariocontrole = require('../controller/usuariocontrole');
const autenticacaoControle = require('../controller/autenticacaocontrole');

router.post('/cadastrar_usuario', usuariocontrole.cadastrarUsuario);
router.post('/atualizar_usuario', autenticacaoControle.verificarAutenticacao, usuariocontrole.atualizarUsuario);

module.exports = router;