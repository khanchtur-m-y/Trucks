module.exports = class Player {
	constructor(i) {
		this.y = 0;
		this.x = 0;
		this.isloaded = false;
		this.color;
		this.i = i;
		this.score = 0;
		this.directions = [
			[this.y - 1, this.x - 1],
			[this.y - 1, this.x	   ],
			[this.y - 1, this.x + 1],
			[this.y    , this.x - 1],
			[this.y    , this.x + 1],
			[this.y + 1, this.x - 1],
			[this.y + 1, this.x	   ],
			[this.y + 1, this.x + 1]
			];
	}

	getNewCoords(){
		this.directions = [
			[this.y - 1, this.x - 1],
			[this.y - 1, this.x	   ],
			[this.y - 1, this.x + 1],
			[this.y    , this.x - 1],
			[this.y    , this.x + 1],
			[this.y + 1, this.x - 1],
			[this.y + 1, this.x	   ],
			[this.y + 1, this.x + 1]
			];
	}
	
	appear(matrixGiven) {
		switch (this.i) {
			case 0:
				this.y = 1;
				this.x = 1;
				this.color = "red";
				break;

			case 1:
				this.y = 1;
				this.x = matrixGiven.length - 2;
				this.color = "limeGreen";
				break;

			case 2:
				this.y = matrixGiven.length - 2;
				this.x = 1;
				this.color = "cyan";
				break;

			case 3:
				this.y = matrixGiven.length - 2;
				this.x = matrixGiven.length - 2;
				this.color = "purple";
				break;
		}
		matrixGiven[this.y][this.x] = this.i;
		return matrixGiven;
	}

	checkCollision(matrixGiven, _y, _x) {
		if (matrixGiven[this.y + _y][this.x + _x] == 0) {
			return "grass";
		}

		else if (matrixGiven[this.y + _y][this.x + _x] == 1) {
			return "gold";
		}

		else {
			return false;
		}
	}

	move(matrixGiven, pressed_key) {
		var vert;
		var hor;
		
		switch (pressed_key) {

		case "ArrowUp": //38
			vert = -1;
			hor = 0;
			break;

		case "ArrowDown": //40
			vert = 1;
			hor = 0;
			break;

		case "ArrowRight":  //39
			vert = 0;
			hor = 1;
			break;

		case "ArrowLeft":  //37
			vert = 0;
			hor = -1;
			break;
		}
		
		this.getNewCoords();
		
		for(var a in this.directions){
			if(matrixGiven[this.directions[a][0]][this.directions[a][1]] == this.i && this.isloaded == true){
				this.score++;
				this.isloaded = false;
			}
		}
		
		var ch = this.checkCollision(vert, hor);
		if (ch != false) {
			matrixGiven[this.y][this.x] = 0;
			this.y += vert;
			this.x += hor;
			matrixGiven[this.y][this.x] = 3;
			
			if (ch == "gold") {
				this.isloaded = true;
			}
		}
		return matrixGiven;
	}
};