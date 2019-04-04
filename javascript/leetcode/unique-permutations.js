/*
Given a collection of numbers that might contain duplicates, return 
all possible unique permutations.
*/

var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  results = [];

  function makePermutations(nums, pmt) {
    // base cases
    if (!nums.length) {
      results.push(pmt);
      return;
    }

    // recursive cases
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i + 1]) {
        let rest = nums.slice();
        rest.splice(i, 1);
        makePermutations(rest, pmt.concat(nums[i]));
      }
    }
  }
  makePermutations(nums, []);

  return results;
};


// tests
console.log(permuteUnique([])); // [[]], not sure yet
console.log(permuteUnique([0])); // [[0]]
console.log(permuteUnique([0, 0, 0, 0])); // [[0,0,0,0]]
console.log(permuteUnique([0, 1])); // [[0,1],[1,0]]
console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([-1, 3, 5])); // [[-1,3,5],[-1,5,3],[3,-1,5],[3,5,-1],[5,-1,3],[5,3,-1]]
console.log(permuteUnique([0, 0, 7, 7])); // [[0,0,7,7],[0,7,0,7],[0,7,7,0],[7,0,0,7],[7,0,7,0],[7,7,0,0]]
