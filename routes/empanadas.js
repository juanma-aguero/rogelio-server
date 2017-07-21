var express = require('express');
var router = express.Router();
var empanadas = require('../tools/empanadas');

/* GET home page. */
router.get('/status', function (req, res, next) {
    res.json(empanadas.getStatus());
});

router.post('/', function (req, res, next) {
    res.json(empanadas.abrirPedido());
});


module.exports = router;
