/*
Given a non-negative index k where k ≤ 33, return the kth 
index row of the Pascal's triangle.

Note that the row index starts from 0.
*/

// var getRow = function (rowIndex) {
//   let rowA = [], rowB;
//   for (let i = 0; i < rowIndex; i++) {
//     rowB = [1];
//     for (let j = 1; j < (i + 1) / 2; j++) {
//       rowB.push(rowA[j] + rowA[j - 1]);
//     }
//     rowB = rowB.concat(rowB.slice(0, Math.floor((i + 1) / 2)).reverse());
//     rowA = rowB.slice();
//   }
//   return rowA;
// };
var getRow = function (rowIndex) {
  let rowA = [], rowB;
  for (let i = 0; i <= rowIndex; i++) {
    rowB = [1];
    for (let j = 1; j <= i; j++) {
      rowB.push((rowA[j] || 0) + (rowA[j - 1] || 0));
    }
    rowA = rowB.slice();
  }
  return rowA;
};

// tests
console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
console.log(getRow(6));