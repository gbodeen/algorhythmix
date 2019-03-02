/*
You are given two arrays of numbers, a long array and a short 
array. Return the length of the shortest subarray in the long 
array that contains each element in the short array. If no 
such subarray exists, return 0.
*/

// naive solution is to check every subarray:
function findSubArray(long, short) {
  let sub, loc;
  for (let len = short.length; len < long.length; len++) {
    midloop:
    for (let start = 0; start <= long.length - len; start++) {
      subarray = long.slice(start, start + len);
      for (let x of short) {
        loc = subarray.indexOf(x);
        if (loc === -1) continue midloop;
        // this makes sure we don't double-count an element of long:
        if (loc >= 0) sub.splice(loc, 1);
      }
      return len;
    }
  }
  return 0;
}
// time complexity: cubic
// space complexity: linear


// I found one way to do better on time complexity at the cost of worse space complexity:
function findSubArray(long, short) {
  const indices = short.map(x =>
    long.map((y, i) => [y, i])
      .filter(pair => pair[0] === x)
      .map(pair => pair[1])
  );
  // the above part is quadratic time...

  const len = cartesianProduct(indices)
    // the helper is quadratic...
    .filter(idxs => [...new Set(idxs)].length === idxs.length)
    // the filter with newSet is quadratic...
    .reduce((min, idxs) => {
      let sublen = Math.max(...idxs) - Math.min(...idxs) + 1;
      return sublen < min ? sublen : min;
    }, Infinity);
  // the reduce is only linear
  return len < Infinity ? len : 0;
}
// time complexity: quadratic
// space complexity: also quadratic though

function cartesianProduct([first, ...rest]) {
  var sub;
  if (Array.isArray(rest[0])) {
    sub = cartesianProduct(rest);
  } else {
    sub = [[]];
  }
  const prod = [];
  for (let x of first) {
    for (let y of sub) {
      prod.push([].concat(x, y));
    }
  }
  return prod;
}
// cartesianProduct's worst case is when long and short have
//  all the same element, repeated N times.
//  Then time & space complexity would be quadratic.


// tests
console.log(findSubArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5]) === 5);
console.log(findSubArray([5, 2, 4, 1, 8, 1, 7, 5], [5, 1, 1]) === 5);
console.log(findSubArray([1, 3, 5, 2, 4, 9, 4, 1, 3], [4, 1, 4]) === 4);
console.log(findSubArray([1, 2, 3], [4]) === 0);
