function solve(matrix) {

    let sum = 0;
    let isMagical = true;

    for(let row = 0; row < 1; row++) {
        let currentRow = matrix[row];
        for(let col = 0; col < currentRow.length; col++) {
            sum += matrix[row][col];
        }
    }

    for(let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        let rowSum = 0;
        for(let col = 0; col < currentRow.length; col++) {
            rowSum += matrix[row][col];
        }
        if(rowSum != sum) {
            isMagical = false;
        }
        if (row === 0) {
            for (let col = 0; col < matrix[row].length; col++) {
                let columnSum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    columnSum += matrix[col][i];
                }
                if (columnSum !== sum) {
                    return false;
                }
            }
        }
    }

    return isMagical;
}
