document.getElementById('deletePlayerButton').addEventListener('click', function () {
    var request = new XMLHttpRequest();
    var path = window.location.pathname.split('player/');
    //Verbindung herstellen
    console.log(path);
    request.open('DELETE', '/player/'+path[1]);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.responseType = 'text';
    request.onload = function() {
        console.log(request.response)
    };
    request.send();

});


    document.getElementById('updatePlayerButton').addEventListener('click', function () {
    var request = new XMLHttpRequest();
    var path = window.location.pathname.split('player/');
    //Verbindung herstellen
    console.log(path);
    request.open('PUT', '/player/'+path[1]);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.responseType = 'text';
    request.onload = function() {
        console.log(request.response)
    };
    //sendet die Daten aus dem inputfeld an den server
    request.send("playerName="+document.getElementById('updatePlayerName').value);
        document.getElementById('updatePlayerName').value = '';

});