function main() {
    var socket = io.connect('http://localhost:3000');

    socket.on("kpav", function () {
        console.log("kpav");
    });
}

window.onload = main;


function setup() {
    createCanvas(500, 500);
    background('#acacac');
    frameRate(5);
}

function draw() {
    fill("red");
    socket.emit("aaa");
}