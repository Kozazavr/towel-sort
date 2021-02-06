
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr2 = [];
    if(matrix == 0 || matrix == undefined) {
        return arr2;
    }
    for (let i = 0; i < matrix.length; i++) {
        if( i == 0 || i % 2 == 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                arr2.push(matrix[i][j]);
            }
        } else {
            matrix[i].reverse();
            for (let j = 0; j < matrix[i].length; j++) {
               arr2.push(matrix[i][j]);
            }
        }
    } 
    return arr2;
}

