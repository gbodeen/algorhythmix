/*
Given a collection of candidate numbers (candidates) and a target 
number (target), find all unique combinations in candidates where 
the candidate numbers sums to target. Each number in candidates 
may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
*/

// var combinationSum2 = function (candidates, target) {
//   candidates.sort((a, b) => a - b);
//   const combos = {};
//   const checkSums = (start = 0, total = 0, list = '') => {
//     for (let i = start; i < candidates.length; i++) {
//       if (total + candidates[i] === target) {
//         return combos[list + ',' + candidates[i]] = true;
//       }
//       if (total + candidates[i] < target) {
//         checkSums(i + 1, total + candidates[i], list + ',' + candidates[i]);
//       }
//     }
//   }
//   checkSums();
//   return Object.keys(combos).map(key => key.slice(1).split(',').map(c => parseInt(c)));
// };

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const combos = [];
  const sums = (start = 0, sum = 0, list = []) => {
    if (sum === target) {
      return combos.push(list);
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      if (sum + candidates[i] <= target) {
        sums(i + 1, sum + candidates[i], list.concat(candidates[i]))
      }
    }
  }
  sums();
  return combos;
};


// tests
console.log(combinationSum2([], 0)); // []
console.log(combinationSum2([1], 0)); // []
console.log(combinationSum2([1], 1)); // [[1]]
console.log(combinationSum2([1, 1, 1, 1, 1], 1)); // [[1]]
console.log(combinationSum2([1, 1, 1, 1, 1], 2)); // [[1, 1]]
console.log(combinationSum2([1, 1, 1, 1, 1, 1, 1], 3)); // [[1, 1, 1]]
console.log(combinationSum2([1, 1, 2, 2], 2)); // [[1,1],[2]]
console.log(combinationSum2([1, 1, 2, 2], 3)); // [[1,2]]
console.log(combinationSum2([1, 1, 2, 2], 4)); // [[1,1,2],[2,2]]
console.log(combinationSum2([5, 4, 3, 2, 1], 6)); // [[1,2,3],[2,4],[1,5]]
console.log(combinationSum2([1, 2, 2, 2, 2, 17], 22)); // [[1,2,2,17]]
console.log(combinationSum2([1, 2, 2, 2, 2, 2, 2], 9)); // [[1,2,2,2,2]]
console.log(combinationSum2([1, 2, 2, 2, 2, 2, 3, 3], 7)); // [[1,2,2,2],[1,3,3],[2,2,3]]
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6],[1,7],[1,2,5],[2,6]]
