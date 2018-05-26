module.exports = class MatrixHandler {
    constructor(matrixSize, side) {
        this.matrix = [];
        this.matrixSize = matrixSize;
        this.side = side;
    }

    setup() {
        for (var y = 0; y < this.matrixSize; y++) {
            this.matrix[y] = [];
            for (var x = 0; x < this.matrixSize; x++) {
                this.matrix[y][x] = 4;
            }
        }

        for (var i = 0; i < 10; i++) {
            this.matrix[Math.floor(Math.random() * this.matrixSize)][Math.floor(Math.random() * this.matrixSize)] = 5;
        }

        for (var i = 0; i < 10; i++) {
            this.matrix[Math.floor(Math.random() * this.matrixSize)][Math.floor(Math.random() * this.matrixSize)] = 6;
        }

        this.matrix[0][0] = 0;
        this.matrix[0][this.matrixSize - 1] = 1;
        this.matrix[this.matrixSize - 1][0] = 2;
        this.matrix[this.matrixSize - 1][this.matrixSize - 1] = 3;
    }
};