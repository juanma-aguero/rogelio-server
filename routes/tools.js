var express = require('express');
var router = express.Router();
var tools = require('../services/tools');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({tools: tools.getActiveTools()});
});

module.exports = router;
