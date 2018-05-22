
function main() {
	var nick = prompt("choose your nickname");
    var socket = io.connect('http://localhost:3000');
	socket.emit("nickname", nick);
	socket.emit("pWait", pWait);
	
	var info = new Info();
	
    document.addEventListener('keydown', function (event) {
        info.getDirections(event.key);
		socket.emit('directionFromClient', info);
    });
	
	socket.on('directionFromServer', function(data){
		pl.move(data.directionHor, data.directionVert);
	});
	
	socket.on("getYourID", function(data){
		console.log(data);
	})
	
socket.on("getColor", function(data){
	console.log(data);
});
}

window.onload = main;