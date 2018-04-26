var express = require('express');
var rec = require('../Database');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    var r = new rec(5,5);

    console.log(r);


    res.render('index', {title: 'Express'});
});

module.exports = router;