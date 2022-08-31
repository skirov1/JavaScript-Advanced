function solve(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < matrix.length; row++){
        var currentRow = matrix[row];
        for (let col = 0; col < currentRow.length; col++){
            if (matrix[row][col] > biggestNum) {
                biggestNum = matrix[row][col];
            }
        }
    }
    return biggestNum;
}
