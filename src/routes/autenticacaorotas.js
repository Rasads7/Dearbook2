const express = require('express');
const router = express.Router();

const autenticacaoControle = require('../controller/autenticacaocontrole');

router.post('/autenticar', autenticacaoControle.autenticar);
router.get('/sair', autenticacaoControle.sair);

module.exports = router;