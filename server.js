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
console.log("server is listening\n");

var matrix = new Matrix(24, 24);
matrix.setup();

var colors = ["red", "limeGreen", "cyan", "purple"];
var setupObj = { color: "", index: 0, nick: "", mtrx: matrix.matrix };
var idNickArr = [[/*id*/], [/*nick*/]];
var plArr = [];

io.on('connection', function (socket) {
	idNickArr[0].push(socket.id);
	
	/*
	socket.on("disconnect", function(socket){
		for(var i in idNickArr[0]){
			if(idNickArr[0][i] == socket.id){
				io.sockets.emit("player_left", idNickArr[1][i]);
				idNickArr[0][i].splice();
				idNickArr[1][i].splice();
			}
		}
	});
	*/

	socket.on("nickname", function (data) {
		idNickArr[1].push(data);
		setupObj.color = colors[idNickArr[0].length - 1];
		setupObj.index = idNickArr[0].length - 1;
		setupObj.nick = data;
		plArr.push(new Player());
		matrix.matrix = plArr[plArr.length - 1].appear(matrix.matrix);
		setupObj.mtrx = matrix.matrix;
		io.to(idNickArr[0][idNickArr[1].length - 1]).emit("setup", setupObj);
	});

	socket.on('directionFromClient', function (data) {
		matrix.matrix = plArr[data.i].move(matrix.matrix, data.pressed_key);
		io.sockets.emit('getMatrix', matrix.matrix);
	});
});