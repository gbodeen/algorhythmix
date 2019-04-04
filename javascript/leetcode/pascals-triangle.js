/* 
Given a non-negative integer numRows, generate the 
first numRows of Pascal's triangle.
*/

var generate = function (numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    triangle.push([1]);
    for (let j = 1; j < (i + 1) / 2; j++) {
      triangle[i].push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    triangle[i] = triangle[i].concat(triangle[i].slice(0, Math.floor((i + 1) / 2)).reverse());
  }
  return triangle;
};


// tests
console.log(generate(0)); // []
console.log(generate(1)); // [[1]]
console.log(generate(2)); // [[1],[1,1]]
console.log(generate(3)); // [[1],[1,1],[1,2,1]]
console.log(generate(4)); // [[1],[1,1],[1,2,1],[1,3,3,1]]
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]