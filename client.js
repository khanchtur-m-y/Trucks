function main() {
	var socket = io.connect('http://localhost:3000');
	var p = document.getElementById("p");
	var nick = prompt("nick");
	socket.emit("nickname", nick);

	socket.on("getIndex", function (data) {
		p.innerHTML = "Nickname: " + nick + "	Index: " + data;
	});
}

window.onload = main;