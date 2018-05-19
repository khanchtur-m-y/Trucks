class Player {
    constructor(){
        this.x;
        this.y;
        this.b = false;
    }

    getCoord(nameOfKey){
        console.log(this.x + ' ' + this.y + ' ' + this.b + ' ' + nameOfKey);
    }
}