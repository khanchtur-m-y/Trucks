var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Matrix = require("./matrixMod.js")

var plInfo = [[/*id*/], [/*nick*/]];

app.use(express.static("."));
app.get('/', function (req, res) {
	res.redirect('index.html');
});
server.listen(3000);
console.log("server is active \n");

io.on('connection', function (socket) {
	socket.on("nickname", function (data) {
		plInfo[0].push(socket.id);
		plInfo[1].push(data);
		io.to(plInfo[0][plInfo[0].length - 1]).emit("getIndex", plInfo[1].length - 1);
	})
});