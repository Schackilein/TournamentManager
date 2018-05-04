var DatabaseMange = require('./Database');

class PlayerDb extends DatabaseMange {
//diese funktion fügt einen Spieler der Datenbank hinzu
    addPlayer(id, pname) {
        return this.getQuery('insert into Player set id =?, playerName =?', [id, pname]);
    }

//diese funktion löscht einen Spieler aus der Datenbank
    deletePlayer(id) {
        return this.getQuery('delete from Player\n' +
            'where id =?', id)
    }

//diese funktion ändert einen Spieler aus der Datenbank ab.
    updatePlayer(pname, id) {
        return this.getQuery('update Player set playerName =? where id =?', [pname, id]);
    }

//diese funktion zeigt alle Spieler aus der Datenbank mit values.
    getAllPlayerData() {
        this.getQuery('select * from Player');
    }

//diese funktion zeigt einen Spieler aus der Datenbank mit values.
    getPlayerByID(id) {
        return this.getQuery('select * from Player',id);
    }
}

module.exports =  PlayerDb;