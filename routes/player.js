var express = require('express');
var db = require('../Database');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    var r = new db();
    console.log(r.getPlayerByID(4));
    res.render('player/player', {});
});

module.exports = router;