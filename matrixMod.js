module.exports = class MatrixHandler {
    constructor(){
        this.matrix;
        this.sz = 25;
        this.side = 20;
    }

    setup(){
        this.matrix = [];
        for(var y = 0; y < sz; y++){
            this.matrix[y] = [];
            for(var x = 0; x < this.sz; x++){
                this.matrix[y][x] = 4;
            }
        }
    }
};