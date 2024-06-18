const express = require('express');
const router = express.Router();

const usuariocontrole = require('../controller/usuariocontrole');

router.post('/login.html', usuariocontrole.cadastrarUsuario);

module.exports = router;