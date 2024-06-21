const express = require('express');
const router = express.Router();
const path = require('path');

const autenticacaoControle = require('../controller/autenticacaocontrole');

router.post('/autenticar', autenticacaoControle.autenticar);
router.get('/sair', autenticacaoControle.sair);
router.get('/Home.html', autenticacaoControle.verificarAutenticacao, (req, res) => {
    res.sendFile(path.join(__dirname, '../views/Home.html'));
});

module.exports = router;