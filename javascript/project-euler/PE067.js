/*
By starting at the top of the triangle below and moving to adjacent 
numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom in triangle.txt, a 15K text 
file containing a triangle with one-hundred rows.
*/


const fs = require('fs');


class PE067 {
  loadNums() {
    this.nums = fs.readFileSync('./data_for_algos/p067_triangle.txt', 'utf8')
      .split('\n').map(row => row.split(' ').map(s => parseInt(s)));
    this.nums.pop();
    return this.names;
  }

  maxPyramidPath() {
    const pyramid = this.nums;
    for (let r = pyramid.length - 2; r >= 0; r--) {
      let row = pyramid[r];
      let nextRow = pyramid[r + 1];
      for (let i = 0; i < row.length; i++) {
        row[i] += Math.max(nextRow[i], nextRow[i + 1]);
      }
    }
    return pyramid[0][0];
  }

  static main() {
    const test = new PE067();
    test.loadNums();
    console.log(test.maxPyramidPath()); // 7273
  }
}


// test
PE067.main();