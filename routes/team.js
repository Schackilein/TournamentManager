var express = require('express');
var db = require('../app/TeamDb');
var router = express.Router();

var laenge = 1;

router.post('/', function (req, res, next) {
    var addTeamToDb = new db();
    var addTeamDataToDb;
    // req.body sind die daten aus der ajax
    addTeamToDb.addTeam(laenge,req.body.teamName).then(function (data) {
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

router.get('/:id', function (req, res, next) {
    var getTeamDb = new db();
    var getTeamData;
    getTeamDb.getTeamDataById(req.params.id).then(function (data) {
        console.log(data);
        getTeamData = data;
        laenge = getTeamData.length;
        // console.log(getTeamData);
        res.render('team/updateTeam', {'teamData':getTeamData[0]});
    }).catch(function (err) {
        throw err
    });

});

router.delete('/:id', function (req, res, next) {
    var deleteTeamDb = new db();
    var deleteTeamData;
    // entnimmt die id des pfades und löscht die mit allen informationen aus der datenbank
    deleteTeamDb.deletePlayer(req.params.id).then(function (data) {
        deleteTeamData = data;
        console.log('delete');
        res.render('team/deleteTeam', {'teamData':deleteTeamData});
    }).catch(function (err) {
        throw err
    });

});

router.put('/:id', function (req, res, next) {
    // console.log(req.params);
    var updateTeamDb = new db();
    var updateTeamData;
    // entnimmt die daten aus der ajax
    updateTeamDb.updateTeam(req.body.newTeamName, req.params.id).then(function (data) {
        updateTeamData = data;
        res.render('team/updateTeam', {'teamData':updateTeamData});
    }).catch(function (err) {
        throw err
    });

});

router.put('/:id', function (req, res, next) {
 var relationDb = new db();
 var relationData;
 relationDb.addPlayerToTeam(req.body.playerId,req.params.id).then(function (data) {
     relationData = data;
     res.render('team/addPlayerToTeam',{'teamData':relationData});
 }).catch(function (err) {
     throw err
 })
});


module.exports = router;
