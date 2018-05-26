function main() {
	var socket = io.connect('http://localhost:3000');
	
	var nick = prompt("choose your nickname");
	socket.emit("nickname", nick);
	
	var info = {pressed_key: "", i: 0};
	
	socket.on("setup", function (data) {
		info.i = data.index;
		matrixClient = data.mtrx;
		p.innerHTML = "connected as " + data.nick;
	});

	document.addEventListener('keydown', function (event) {
		info.pressed_key = event.key;
		socket.emit('directionFromClient', info);
	});

	socket.on("getMatrix", function (data) {
		matrixClient = data.matrixI;
	});
	
	socket.on("player_left", function(data){
		console.log(data + " has left");
	});
}

window.onload = main;