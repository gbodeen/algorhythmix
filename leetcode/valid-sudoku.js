/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/

var isValidSudoku = function (board) {
  // strategy: rows, then cols, then squares
  let nums;
  for (let row of board) {
    nums = {};
    for (let cell of row) {
      if (cell !== '.' && nums[cell]) return false;
      nums[cell] = true;
    }
  }
  for (let col = 0; col < board[0].length; col++) {
    nums = {};
    for (let row of board) {
      let cell = row[col];
      if (cell !== '.' && nums[cell]) return false;
      nums[cell] = true;
    }
  }
  for (let rowBase = 0; rowBase < board.length; rowBase += 3) {
    for (let colBase = 0; colBase < board[0].length; colBase += 3) {
      nums = {};
      for (let row = rowBase; row < rowBase + 3; row++) {
        for (let col = colBase; col < colBase + 3; col++) {
          let cell = board[row][col];
          if (cell !== '.' && nums[cell]) return false;
          nums[cell] = true;
        }
      }
    }
  }
  return true;
};
// time complexity: O(N) for N squares on the board
// space complexity: O(sqrt(N))


// tests
var board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(isValidSudoku(board)); // true
board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(isValidSudoku(board)); // false