/*
Starting in the top left corner of a 2×2 grid, and only being able 
to move to the right and down, there are exactly 6 routes to the 
bottom right corner.

How many such routes are there through a 20×20 grid?
*/

class PE015 {
  countPaths(n) {
    const nodes = [];
    for (let r = 0; r <= n; r++) {
      let row = [1];
      nodes.push(row);
      for (let c = 0; c <= n; c++) {
        nodes[r][c] = (((nodes[r - 1] && nodes[r - 1][c]) || 0) + (nodes[r][c - 1] || 0)) || 1;
      }
    }
    return nodes[n][n];
  }
}


// tests
const test = new PE015();
console.log(test.countPaths(2)); // 6
console.log(test.countPaths(20)); // 137846528820