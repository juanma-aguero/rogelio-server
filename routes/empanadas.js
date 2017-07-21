var express = require('express');
var router = express.Router();
var empanadas = require('../tools/empanadas');

/* GET home page. */
router.get('/status', function (req, res, next) {
    res.json({
        status: empanadas.getStatus()
    });
});


module.exports = router;
