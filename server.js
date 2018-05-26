var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Matrix = require("./matrixMod");
var Player = require("./playerMod");

app.use(express.static('.'));
app.get('/', function (req, res) {
	res.redirect('index.html');
});
server.listen(3000);
console.log("server is listening");

var colors = ["red", "limeGreen", "cyan", "purple"];
var colorInd = { color: "", index: 0, nick: "" };
var idNickArr = [[/*id*/], [/*nick*/]];
var plArr = [];

var matrix = new Matrix(24, 24);
matrix.setup();

io.on('connection', function (socket) {
	idNickArr[0].push(socket.id);

	socket.on("nickname", function (data) {
		idNickArr[1].push(data);
		colorInd.color = colors[idNickArr[0].length - 1];
		colorInd.index = idNickArr[0].length - 1;
		colorInd.nick = data;
		plArr.push(new Player())
		io.to(idNickArr[0][idNickArr[1].length - 1]).emit("getColor", colorInd);
	});

	socket.on('directionFromClient', function (data) {
		io.sockets.emit('directionFromServer', data);
	});
});