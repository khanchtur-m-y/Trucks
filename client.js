var pl;
function main() {
    var socket = io.connect('http://localhost:3000');
	var nick = prompt("choose your nickname");
	socket.emit("nickname", nick);
	
	var info = new Info();
	
    document.addEventListener('keydown', function (event) {
        info.getDirections(event.key);
		socket.emit('directionFromClient', info);
    });
	
	socket.on('directionFromServer', function(data){
		console.log(data);
		pl.move(data.directionHor, data.directionVert);
		console.log(frameCount);
	});
	
	socket.on("getYourID", function(data){
		console.log(data);
	})
}

window.onload = main;