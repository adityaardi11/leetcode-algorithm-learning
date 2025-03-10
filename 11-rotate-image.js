/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let remember_matrix = JSON.parse(JSON.stringify(matrix));
    let n = matrix.length;
    let xn = n-1;
    console.log("matrix length: ",n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // let temp = matrix[i][j];
            // temp_array.push(matrix[i][j]);
            // let temp = remember_matrix[j][xn-i];
            console.log("swap:"+[i,j]+"("+remember_matrix[i][j]+") -> "+[j,xn-i]+"("+remember_matrix[j][xn-i]+")");
            matrix[j][xn-i] = remember_matrix[i][j];
            matrix[i][j] = remember_matrix[j][xn-i];
            // break;
            // matrix[i][j] = remember_matrix[j][xn-i];
            // matrix[j][xn-i] = temp;
        }

        // break;
        // console.log(remember_matrix);
    }
    return matrix;
};

let matrix = [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]];
let output = [
    [15,13,2,5],
    [14,3,4,1],
    [12,6,8,9],
    [16,7,10,11]];
console.log(matrix);
rotate(matrix);
console.log(matrix);