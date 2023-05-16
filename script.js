function displayData() {
    var playerId = document.getElementById("playerId").value;

    // Perform AJAX request to retrieve player data from CSV file
    $.ajax({
        url: 'players.csv',
        dataType: 'text',
        success: function(data) {
            var lines = data.split('\n');
            var playerData = {};
            for (var i = 1; i < lines.length; i++) {
                var parts = lines[i].split(',');
                if (parts[0] === playerId) {
                    playerData = {
                        name: parts[1],
                        country: parts[2],
                        role: parts[3],
                        price: parts[4]
                    };
                    break;
                }
            }
            

            // Display player data in the display.html page
            sessionStorage.setItem('playerData', JSON.stringify(playerData));
            sessionStorage.setItem('playerId', JSON.stringify(playerId));
            window.location.href = 'display.html';
        }
    });
}
