var mysql = require('mysql');

class DatabaseManage {

    constructor() {
        this.connection = null;
    }

    getQuery(command, parameter = {}){
        var me = this;
        return new Promise(function (resolve, reject) {
            me.init();
            me.connection.connect(function (err) {
                if (err) throw err;
                //mit der query werden die values hinzugefügt
                me.connection.query(command, parameter, function (error, results, fields) {
                        if (error) reject(error);
                        me.connection.end();
                        resolve(results);
                    });
            });
        });
    }

    init() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'docker-florian',
            password: 'docker-florian',
            database: 'docker-florian'
        });
    }

}

module.exports = DatabaseManage;