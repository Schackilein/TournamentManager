document.getElementById('deleteTeamButton').addEventListener('click', function () {
    var request = new XMLHttpRequest();
    var path = window.location.pathname.split('team/');
    //Verbindung herstellen
    console.log(path);
    request.open('DELETE', '/team/'+path[1]);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.responseType = 'text';
    request.onload = function() {
        console.log(request.response)
    };
    request.send();
});

document.getElementById('updateTeamButton').addEventListener('click', function () {
    var request = new XMLHttpRequest();
    var path = window.location.pathname.split('team/');
    //Verbindung herstellen
    // console.log(path);
    request.open('PUT', '/team/'+path[1]);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.responseType = 'text';
    request.onload = function() {
        console.log(request.response)
    };
    //sendet die Daten aus dem inputfeld an den server
    request.send("newTeamName="+document.getElementById('updateTeamName').value);
    document.getElementById('updateTeamName').value = '';
});

document.getElementById('addPlayerToTeamButton').addEventListener('click', function () {
    var request = new XMLHttpRequest();
    var path = window.location.pathname.split('team/');
    //Verbindung herstellen
    // console.log(path);
    request.open('POST', '/team/'+path[1]);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.responseType = 'text';
    request.onload = function() {
        console.log(request.response)
    };
    //sendet die Daten aus dem inputfeld an den server
    request.send("playerId="+document.getElementById('addPlayerToTeam').value);
    document.getElementById('addPlayerToTeam').value = '';
});