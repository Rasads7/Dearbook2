const Livro = require('../model/livros');

async function listarLivros(req, res) {
    try {
        const livros = await Livro.findAll();
        res.render('livros.html', { livros });
    } catch (error) {
        console.error('Erro ao listar livros:', error);
        res.status(500).send('Erro ao listar livros');
    }
}

async function adicionarLivro(req, res) {
    try {
        const { titulo, autor, descricao, pdf } = req.body;
        await Livro.create({ titulo, autor, descricao, pdf });
        res.redirect('/livros.html');
    } catch (error) {
        console.error('Erro ao adicionar livro:', error);
        res.status(500).send('Erro ao adicionar livro');
    }
}

module.exports = {
    listarLivros,
    adicionarLivro
};
