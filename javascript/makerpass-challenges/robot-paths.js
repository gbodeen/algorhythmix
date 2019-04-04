/*
A robot located at the top left corner of an n x n grid is trying 
to reach the bottom right corner. The robot can move either up, 
down, left, or right, but cannot visit the same spot twice. How 
many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.
Helper function makeBoard is provided.
*/

function robotPaths(n) {
  let count = 0;
  const board = makeBoard(n);

  function countPaths(i = 0, j = 0) {
    // base case: check for having reached the end square:
    if (i === n - 1 && j === n - 1) {
      count++;
      return;
    }

    // otherwise, recursively try 4 directions
    board.togglePiece(i, j); // mark current square
    if (j > 0 && !board.hasBeenVisited(i, j - 1)) { // try left
      countPaths(i, j - 1);
    }
    if (i > 0 && !board.hasBeenVisited(i - 1, j)) { // try up
      countPaths(i - 1, j);
    }
    if (j < n - 1 && !board.hasBeenVisited(i, j + 1)) { // try right
      countPaths(i, j + 1);
    }
    if (i < n - 1 && !board.hasBeenVisited(i + 1, j)) { // try down
      countPaths(i + 1, j);
    }
    board.togglePiece(i, j); // unmark current square
  }

  countPaths();
  return count;
}


function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  }
  return board;
}


// tests
console.log(robotPaths(1) === 1);
console.log(robotPaths(2) === 2);
console.log(robotPaths(3) === 12);
console.log(robotPaths(4) === 184);
console.log(robotPaths(5) === 8512);
console.log(robotPaths(6) === 1262816);
