document.getElementById('addPlayerButton').addEventListener('click', function () {
        var request = new XMLHttpRequest();
        var path = window.location.pathname.split('player/');
        //Verbindung herstellen
        console.log(path);
        request.open('POST', '/player/');
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.responseType = 'text';
        request.onload = function() {
            console.log(request.response)
        };
        //sendet die Daten aus dem inputfeld an den server
        request.send("playerName="+document.getElementById('addPlayerName').value);
    document.getElementById('addPlayerName').value = '';
    });
// classR.getAllPlayerData();
// classR.getPlayerByID(2);
// classR.updatePlayer('Hans','XXX',4);
// classR.deletePlayer(2);