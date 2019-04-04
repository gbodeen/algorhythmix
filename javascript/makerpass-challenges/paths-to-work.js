/*
You live at (0,0) coordinate on a map, and your work is located 
at e units east and s units south from where you live. Assuming 
that you can only travel east and south, return the number of 
possible unique paths to take to work.
*/

function pathsToWork(e, s) {
  const paths = [];
  for (let y = 0; y <= s; y++) {
    paths.push([]);
    for (let x = 0; x <= e; x++) {
      paths[y][x] = x || y ? 0 : 1;
      paths[y][x] += paths[y][x - 1] || 0;
      paths[y][x] += paths[y - 1] ? paths[y - 1][x] : 0;
    }
  }
  return paths[s][e];
}
// time complexity: O(e*s)
// space complexity: O(e*s) also
// This one, unlike robot-paths, is a good fit for "dynamic programming".


// tests
console.log(pathsToWork(0, 1) === 1);
console.log(pathsToWork(1, 0) === 1);
console.log(pathsToWork(2, 2) === 6);
console.log(pathsToWork(4, 4) === 70);
console.log(pathsToWork(4, 6) === 210);
console.log(pathsToWork(5, 8) === 1287);
console.log(pathsToWork(12, 15) === 17383860);
