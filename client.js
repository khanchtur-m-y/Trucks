function main() {
    var socket = io.connect('http://localhost:3000');
    
    var player = new Player();

    document.addEventListener('keydown', function (event) {
        //console.log('socket => server  ' + event.key);
        socket.emit('asa', event.key);
    });

    socket.on('aaa', function (data) {
        player.getCoord(data);
    });
}

window.onload = main;