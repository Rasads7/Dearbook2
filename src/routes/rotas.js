const express = require('express')
const router = express.Router();

const controle = require('../controller/controle');
const autenticacaoRotas = require('./autenticacaorotas');
const usuarioRotas = require('./usuariorotas');
const livroRotas = require('./livrosrotas');

router.get('/', controle.login);
router.use('/', autenticacaoRotas);
router.use('/', usuarioRotas);
router.use('/', livroRotas);

module.exports = router;