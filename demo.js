var TeamDb = require('./app/TeamDb');

var connection = new TeamDb();

var result = connection.getAllTeamData();

result.then((data) => console.log(data));