/*
Write a function which generates a multiplication table as a 
matrix (2D array), based on an array of factors.

Example:
Factors:

[0, 1, 2]

Output:

[[0, 0, 0],
[0, 1, 2],
[0, 2, 4]]
*/


const multiplicationMatrix = factors =>
  factors.map(x => factors.map(y => x * y));
// time & space complexity: quadratic


// tests
console.log(multiplicationMatrix([1, 2])); // [[1,2],[2,4]]
console.log(multiplicationMatrix([-1, 0, 1])); // [[1,0,-1],[0,0,0],[-1,0,1]]
console.log(multiplicationMatrix([0, 1, 2])); // [[0,0,0],[0,1,2],[0,2,4]]
console.log(multiplicationMatrix([-1])); // [[1]]
console.log(multiplicationMatrix([-27, -12, 32, 7])); // [[729,324,-864,-189],[324,144,-384,-84],[-864,-384,1024,224],[-189,-84,224,49]] 