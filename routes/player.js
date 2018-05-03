var express = require('express');
var db = require('../Database');
var router = express.Router();

//laenge ist eine variable die, die anzahl der spieler kennt, sobald die Seite geladen wurde
var laenge = 1;


/* GET home page. */
// bekommt den spieler per ID mit allen informationen
router.get('/:id', function (req, res, next) {
    var playerDb = new db();
    var playerData;
    playerDb.getPlayerByID(req.params.id).then(function (data) {
        playerData = data;
        console.log(playerData[0]);
        res.render('player/updatePlayer', {'playerData':playerData[0]});
    }).catch(function (err) {
        throw err
    });

});

// fügt der datenbank neue spieler hinzu
router.post('/', function (req, res, next) {
    var addPlayerToDb = new db();
    var addPlayerDataToDb;
    // req.body sind die daten aus der ajax
    addPlayerToDb.addPlayer(laenge,req.body.playerName,'null').then(function (data) {
        laenge = laenge+1;
        addPlayerDataToDb = data;
        res.render('player/player', {'playerData':addPlayerDataToDb});
    }).catch(function (err) {
        throw err
    });

});

// ist mit dem deletebutton verbunden und löscht spieler per id aus der datenbank
router.delete('/:id', function (req, res, next) {
    var deletePlayerDb = new db();
    var deletePlayerData;
    // entnimmt die id des pfades und löscht die mit allen informationen aus der datenbank
    deletePlayerDb.deletePlayer(req.params.id).then(function (data) {
        deletePlayerData = data;
        console.log('delete');
        res.render('player/updatePlayer', {'playerData':deletePlayerData});
    }).catch(function (err) {
        throw err
    });

});

// kann spielernamen und teamnamen einer id ändern, es werden immer beide geändert
router.put('/:id', function (req, res, next) {
    // console.log(req.params);
    var updatePlayerDb = new db();
    var updatePlayerData;
    // entnimmt die daten aus der ajax
    updatePlayerDb.updatePlayer(req.body.playerName,'null',req.params.id).then(function (data) {
        updatePlayerData = data;
        res.render('player/updatePlayer', {'playerData':updatePlayerData});
    }).catch(function (err) {
        throw err
    });

});

// bekommt alle daten aus der datenbank sobald die seite geladen wurde.
router.get('/', function (req, res, next) {
    var getPlayersDb = new db();
    var getPlayersData;
    getPlayersDb.getAllPlayerData().then(function (data) {
        console.log(data);
        getPlayersData = data;
        laenge = getPlayersData.length;
        console.log(getPlayersData);
        res.render('player/player', {'playerData':getPlayersData});
    }).catch(function (err) {
        throw err
    });

});

module.exports = router;
