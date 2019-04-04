/*
Write a function that accepts a 2-dimensional array (that is, an 
  array containing many same-length arrays), and prints out every 
  value found, but in a spiral from the upper left in to the center.
*/

function spiralTraversal(matrix) {
  let top = 0, bot = matrix.length,
    lft = 0, rgt = matrix[0].length;
  const spiral = [], size = bot * rgt;
  while (1) {
    // going to the right across the top
    for (let i = lft; i < rgt; i++) {
      spiral.push(matrix[top][i]);
    }
    if (spiral.length >= size) break;
    top++;

    // then going down the right side
    for (let i = top; i < bot; i++) {
      spiral.push(matrix[i][rgt - 1]);
    }
    if (spiral.length >= size) break;
    rgt--;

    // then back left again on the floor
    for (let i = rgt - 1; i >= lft; i--) {
      spiral.push(matrix[bot - 1][i]);
    }
    if (spiral.length >= size) break;
    bot--;

    // then up the left side
    for (let i = bot - 1; i >= top; i--) {
      spiral.push(matrix[i][lft]);
    }
    if (spiral.length >= size) break;
    lft++;
  }
  return spiral;
}
// time complexity: O(n) for n elements in matrix
// space complexity: O(n) also


// tests
console.log(spiralTraversal([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])); // [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]
console.log(spiralTraversal([[1, 2, 3, 4, 5, 6, 7]])); // [1,2,3,4,5,6,7]
console.log(spiralTraversal([[1], [2], [3], [4]])); // [1,2,3,4]
console.log(spiralTraversal([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24]])); // [1,2,3,6,9,12,15,18,21,24,23,22,19,16,13,10,7,4,5,8,11,14,17,20]
console.log(spiralTraversal([[1, 2, 3, 4, 5, 6, 7], [6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18, 19]])); // [1,2,3,4,5,6,7,12,19,18,17,16,15,14,13,6,7,8,9,10,11]