document.getElementById('addTeamButton').addEventListener('click', function () {
    var request = new XMLHttpRequest();
    var path = window.location.pathname.split('team/');
    //Verbindung herstellen
    console.log(path);
    request.open('POST', '/team/');
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.responseType = 'text';
    request.onload = function() {
        console.log(request.response)
    };
    //sendet die Daten aus dem inputfeld an den server
    request.send("teamName="+document.getElementById('addTeamName').value);
    document.getElementById('addTeamName').value = '';
});