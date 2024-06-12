const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res) {
    res.render('Home.html');
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});