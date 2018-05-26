module.exports = class Player {
	constructor(i) {
		this.y;
		this.x;
		this.isloaded = false;
		this.color;
		this.i = i;
	}

	appear() {
		switch (this.i) {
			case 0:
				this.y = 1;
				this.x = 1;
				this.color = "red";
				break;

			case 1:
				this.y = 1;
				this.x = matrix[0].length - 2;
				this.color = "limeGreen";
				break;

			case 2:
				this.y = matrix[0].length - 2;
				this.x = 1;
				this.color = "cyan";
				break;

			case 3:
				this.y = matrix[0].length - 2;
				this.x = matrix[0].length - 2;
				this.color = "purple";
				break;
		}
		matrix[this.y][this.x] = this.i;
	}

	checkCollision(_y, _x) {
		if (matrix[this.y + _y][this.x + _x] == 0) {
			return "grass";
		}

		if (matrix[this.y + _y][this.x + _x] == 1) {
			return "gold";
		}

		else {
			return false;
		}
	}

	move(vert, hor) {
		var ch = this.checkCollision(vert, hor);
		if (ch != false) {
			matrix[this.y][this.x] = 0;
			this.y += vert;
			this.x += hor;
			matrix[this.y][this.x] = 3;
			if (ch == "gold") {
				this.isloaded = true;
			}
		}
	}
};