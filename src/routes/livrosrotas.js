const express = require('express');
const router = express.Router();
const livroControle = require('../controller/livrocontrole');

router.get('/livros', livroControle.listarLivros);
router.post('/adicionar_livro', livroControle.adicionarLivro);

module.exports = router;
