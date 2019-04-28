/*
You are given an n x n 2D matrix representing an image. Rotate the 
image by 90 degrees (clockwise).

Note: You have to rotate the image in-place, which means you have 
to modify the input 2D matrix directly. DO NOT allocate another 2D 
matrix and do the rotation.
*/

var rotate = function (matrix) {
  const N = matrix.length;
  let temp;
  for (let i = 0; i < N / 2; i++) {
    for (let j = i; j < N - 1 - i; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[N - 1 - j][i];
      matrix[N - 1 - j][i] = matrix[N - 1 - i][N - 1 - j];
      matrix[N - 1 - i][N - 1 - j] = matrix[j][N - 1 - i];
      matrix[j][N - 1 - i] = temp;
    }
  }
  return matrix;
};


// tests
console.log(rotate([]));
console.log(rotate([[1]]));
console.log(rotate([[1, 2], [3, 4]]));
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// [[7,4,1],[8,5,2],[9,6,3]]
var A = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(rotate(A));
/* [[ 1, 2, 3, 4],
    [ 5, 6, 7, 8],
    [ 9,10,11,12],
    [13,14,15,16]]
*/
A = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
console.log(rotate(A));
/*
[[1, 2, 3, 4, 5],
[ 6, 7, 8, 9,10],
[11,12,13,14,15],
[16,17,18,19,20],
[21,22,23,24,25]];
*/