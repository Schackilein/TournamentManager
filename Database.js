var mysql = require('mysql');

class TournamentDataManage {

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'docker-florian',
            password: 'docker-florian',
            database: 'docker-florian'
        });
    }

    // leftjoin() {
    //     connection.connect(function(err) {
    //         if (err) throw err;
    //     connection.query('select * from Persons\n' +
    //         'left join Orders on Persons.PersonID = Orders.PersonID', function (error, results, fields) {
    //         if (error) throw error;
    //         console.log('The solution is: ', results);
    //     });
    // });
    // }

    //diese funktion fügt einen Spieler der Datenbank hinzu
    addPlayer(ID,pname,tname) {
        var me = this;
        this.connection.connect(function (err) {
            if (err) throw err;
            //mit der query werden die values hinzugefügt
            me.connection.query('insert into Player set PlayerID =?, PlayerName =?, TeamName= ?',
                [ID,pname,tname] , function (error, results, fields) {
                if (error) throw error;
            });
        });
    }

    //diese funktion löscht einen Spieler aus der Datenbank
    deletePlayer(ID) {
        var me = this;
        this.connection.connect(function (err) {
            if (err) throw err;
            me.connection.query('delete from Player\n' +
                'where PlayerID =?',ID, function (error, results, fields) {
                if (error) throw error;
            });
        });
    }

    //diese funktion ändert einen Spieler aus der Datenbank ab.
    updatePlayer(pname,tname,ID) {
        var me = this;
        this.connection.connect(function (err) {
            if (err) throw err;
            me.connection.query('update Player set PlayerName =?, TeamName =? where PlayerID =?',[pname,tname,ID],
                function (error, results, fields) {
                if (error) throw error;
            });
        });
    }

    //diese funktion zeigt alle Spieler aus der Datenbank mit values.
    getAllPlayerData() {
        var me = this;
        this.connection.connect(function (err) {
            if (err) throw err;
            me.connection.query('select * from Player', function (error, results, fields) {
                if (error) throw error;
                me.close();
            });
        });
    }

    //diese funktion zeigt einen Spieler aus der Datenbank mit values.
    getPlayerByID(ID) {
        var me = this;
        var result = null;
        this.connection.connect(function (err) {
            if (err) throw err;
            me.connection.query('select * from Player\n' +
                'where PlayerID =?',ID, function (error, results, fields) {
                if (error) throw error;
                me.close();
                result = results;
                console.log('1' + result)
            });
        });
        return result;
    }


    close() {
        this.connection.end(function (err) {
        });
    }


}

module.exports = TournamentDataManage;