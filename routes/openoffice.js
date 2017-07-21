var express = require('express');
var router = express.Router();
var openoffice = require('../tools/openoffice');

/* GET home page. */
router.get('/status', function (req, res, next) {
    res.json({
        status: openoffice.getStatus()
    });
});

router.get('/close', function (req, res, next) {
    openoffice.setStatus('closed', 'unknown');
    res.json({
        status: openoffice.getStatus()
    });
});

router.post('/open', function (req, res) {

    var status = req.body.status;
    var name = req.body.name;

    openoffice.setStatus(status, name);

    res.json({
        message: 'Opened!',
        status: openoffice.getStatus()
    });
});

module.exports = router;
