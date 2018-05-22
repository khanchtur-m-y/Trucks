var matrix = [];
var side = 25;
var matrixSize = 20;

function setup() {
    createCanvas((side * matrixSize) + 1, (side * matrixSize) + 1);
    background('#acacac');
    frameRate(20);
	for(var y = 0; y < matrixSize; y++){
		matrix[y] = [];
		for(var x = 0; x < matrixSize; x++){
			matrix[y][x] = 0;
		}
	}

	for(var i = 0; i < 10; i ++){
		matrix[Math.floor(random(0, matrixSize))][Math.floor(random(0, matrixSize))] = 1;
	}
	
	for(var i = 0; i < 10; i ++){
		matrix[Math.floor(random(0, matrixSize))][Math.floor(random(0, matrixSize))] = 2;
	}
}

function draw() {
	for(var y = 0; y < matrix.length; y++){
		for (var x = 0; x < matrix[0].length; x++){
			switch(matrix[y][x]){
				case 0: // grass
					fill('green');
				break;
				
				case 1://gold
					fill('gold');
				break;
				
				case 2://obstacle
					fill('grey');
				break;
				
				case 3://player
					fill('blue');
				break;
			}
			rect(y * side, x * side, side, side);
		}
	}
}