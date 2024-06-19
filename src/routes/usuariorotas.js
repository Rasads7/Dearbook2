const express = require('express');
const router = express.Router();
const usuariocontrole = require('../controller/usuariocontrole');

router.post('/cadastrar_usuario', usuariocontrole.cadastrarUsuario);

module.exports = router;
