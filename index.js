const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();
const session = require('express-session');
const db = require('./src/db');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'src/views')));

app.use(session({
    secret: 'secret-token',
    name: 'sessionId',  
    resave: false,
    saveUninitialized: false
}))

app.use('/', require('./src/routes/rotas'));
app.use('/', require('./src/routes/autenticacaorotas'));
app.use('/', require('./src/routes/usuariorotas'));

db.sync( ()=> console.log(`Banco de dados conectado`));

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});