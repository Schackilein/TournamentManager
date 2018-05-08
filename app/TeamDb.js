var DatabaseMange = require('./Database');

class TeamDb extends DatabaseMange {
    addTeam(id, tname) {
        return this.getQuery('insert into Team set id =?, teamName =?', [id, tname])
    }
    getAllTeamData(){
        return this.getQuery('select * from Team')
    }
    getTeamDataById(id){
        return this.getQuery('select * from Team',id)
    }
    updateTeam(tname, id){
        console.log(tname, id);
        return this.getQuery('update Team set teamName =? where id =?', [tname, id]);
    }
    deletePlayer(id){
        return this.getQuery('delete from Team\n' +
            'where id =?', id)
    }
    addPlayerToTeam(playerid, teamid){
        return this.getQuery('insert into relation_team_player set playerId= ?, teamId= ?', [playerid, teamid])
    }
}

module.exports =  TeamDb;
