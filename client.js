function main() {
	var nick = prompt("choose your nickname");
	var socket = io.connect('http://localhost:3000');
	socket.emit("nickname", nick);

	var info = new Info();

	document.addEventListener('keydown', function (event) {
		info.getDirections(event.key);
		socket.emit('directionFromClient', info);
	});

	socket.on('directionFromServer', function (data) {
		plArr[data.index].move(data.directionHor, data.directionVert);
	});

	socket.on("getColor", function (data) {
		plArr[data.index] = new Player(data.color, data.index);
		plArr[data.index].appear();
		plInd = data.index;
		p.innerHTML = "connected as " + data.nick;
	});

	socket.on("getMatrix", function (data) {
		matrix = data.matrixI;
		side = data.sideI
		matrixSize = data.matrixSizeI;
	});
}

window.onload = main;