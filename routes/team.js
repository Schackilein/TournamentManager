var express = require('express');
var db = require('../app/Database');
var router = express.Router();

var laenge = 1;

router.post('/', function (req, res, next) {
    var addTeamToDb = new db();
    var addTeamDataToDb;
    // req.body sind die daten aus der ajax
    addTeamToDb.addTeam(laenge,'null',req.body.teamName,'0').then(function (data) {
        laenge = laenge+1;
        addTeamDataToDb = data;
        res.render('team/team', {'teamData':addTeamDataToDb});
    }).catch(function (err) {
        throw err
    });

});

// bekommt alle daten aus der datenbank sobald die seite geladen wurde.
router.get('/', function (req, res, next) {
    var getTeamDb = new db();
    var getTeamData;
    getTeamDb.getAllTeamData().then(function (data) {
        console.log(data);
        getTeamData = data;
        laenge = getTeamData.length;
        res.render('team/team', {'teamData':getTeamData});
    }).catch(function (err) {
        throw err
    });

});


module.exports = router;
