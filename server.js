var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static('.'));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
console.log("server is listening");


var colors = [
	[    "red",   "green",    "cyan",  "purple"],
	["#FF0000", "#33FF33", "#00FFFF", "#8000FF"]
	];
	
var idNickArr = [[/*id*/], [/*nick*/]];
var idNickIndex = 0;

io.on('connection', function (socket) {
	idNickArr[0][idNickIndex] = socket.id;
	
	socket.on("nickname", function(data){		
		idNickArr[1][idNickIndex++] = data;
		if(idNickIndex == 3){
			for(var i = 0; i < 4; i++){
				io.to(idNickArr[0][i]).emit("getColor", colors[1][i]);
			}
		}
	});
	
    socket.on('directionFromClient', function (data) {
        io.sockets.emit('directionFromServer', data);
    });
});

