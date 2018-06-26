var side = 24;
var matrixSize = 24;

function setup() {
	for(var i = 0; i < matrixSize; i++){
		matrixClient[i] = [];
		for(var j = 0; j < matrixSize; j++){
			matrixClient[i][j] = 4;
		}
	}
	
	createCanvas((side * matrixSize) + 1, (side * matrixSize) + 1);
	background('#acacac');
	frameRate(5);
}

function draw() {
	for (var y = 0; y < matrixSize; y++) {
		for (var x = 0; x < matrixSize; x++) {
			switch (/* matrix */) {
				case 0:
					fill('red');
					break;

				case 1:
					fill('limeGreen');
					break;

				case 2:
					fill('cyan');
					break;

				case 3:
					fill('purple');
					break;

				case 4:
					fill('green');
					break;

				case 5:
					fill('gold');
					break;

				case 6:
					fill('grey');
					break;
			}
			rect(y * side, x * side, side, side);
		}
	}
	fill('white');
	noStroke();
	rect(side / 4, side / 4, side / 2, side / 2);
	rect(matrixSize - 1 - (0.75 * side), side / 4, side / 2, side / 2);
	rect(matrixSize - 1 - (0.75 * side), matrixSize - 1 - (0.75 * side), side / 2, side / 2);
	rect(size / 4, matrixSize - 1 - (0.75 * side), side / 2, side / 2);
	stroke('black');
}