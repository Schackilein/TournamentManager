var Database = require('./Database');

class PrepareDb extends Database {
    setup() {
        var errorFlag = false;
        this.getQuery("drop table relation_team_player")
            .then((a) => {
                console.log(a);
                return this.getQuery("drop table Team")
            })
            .then(() => {
                return this.getQuery("drop table Player")
            })
            .catch((e) => {
                console.log(e);
                errorFlag = true;
            })
            .then(() => {
                if (errorFlag) {
                    console.log('Error occurred done.')
                } else {
                    console.log('Setup done.')
                }
            })
            .then(() =>{
                return this.getQuery("CREATE TABLE Player (\n" +
                    "  id         int auto_increment primary key,\n" +
                    "  playerName varchar(255)\n" +
                    ");");
            })
            .then(()=>{
                return this.getQuery("CREATE TABLE Team (\n" +
                    "  id       int auto_increment primary key,\n" +
                    "  teamName varchar(255)\n" +
                    ");")
            })
            .then(()=>{
                this.getQuery("CREATE TABLE relation_team_player (\n" +
                    "  playerId int,\n" +
                    "  teamId   int,\n" +
                    "  CONSTRAINT pk_player_team PRIMARY KEY (playerId, teamId),\n" +
                    "  foreign key (playerId) references Player (id),\n" +
                    "  foreign key (teamId) references Team (id)\n" +
                    ");");
            })
            // .then(() =>{
            //     this.getQuery("select T.teamname, playerName from Player\n" +
            //         "left join relation_team_player rtp on Player.id = rtp.playerId\n" +
            //         "left join Team T on rtp.teamId = T.id;");
            //     console.log('done')
            // })



    }
}

var setup = new PrepareDb();
setup.setup();