

class Player{
	constructor(color){
		this.y;
		this.x;
		this.loaded = false;
		this.color = color;
	}
	
	checkCollision(_y, _x){
		if(matrix[this.y + _y][this.x + _x] == 0){
			return "grass";
		}
		
		if(matrix[this.y + _y][this.x + _x] == 1){
			return "gold";
		}
		
		else{
			return false;
		}
	}
	
	move(vert, hor){
		var ch = this.checkCollision(vert, hor);
		if(ch != false){
			matrix[this.y][this.x] = 0;
			this.y += vert;
			this.x += hor;
			matrix[this.y][this.x] = 3;
			if(ch == "gold"){
				this.loaded = true;
			}
		}
	}
}

class Info{
	constructor(){
		this.directionVert;
		this.directionHor;
	}
	
	getDirections(pressed_key){
		switch(pressed_key){
			
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

var colors = [
	[    "red",   "green",    "cyan",  "purple"],
	["#FF0000", "#80FF00", "#00FFFF", "#8000FF"]
	];