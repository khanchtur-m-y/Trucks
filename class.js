class Info {
	constructor() {
		this.directionVert;
		this.directionHor;
		this.color;
		this.index;
	}

	getDirections(pressed_key) {
		switch (pressed_key) {

			case "ArrowUp": //38
				this.directionVert = -1;
				this.directionHor = 0;
				break;

			case "ArrowDown": //40
				this.directionVert = 1;
				this.directionHor = 0;
				break;

			case "ArrowRight":  //39
				this.directionVert = 0;
				this.directionHor = 1;
				break;

			case "ArrowLeft":  //37
				this.directionVert = 0;
				this.directionHor = -1;
				break;
		}
	}
}

