const express = require('express')
const router = express.Router();

const controle = require('../controller/controle');

router.get('/', controle.login);

module.exports = router;