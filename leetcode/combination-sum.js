/*
Given a set of candidate numbers (candidates) (without duplicates) and 
a target number (target), find all unique combinations in candidates 
where the candidate numbers sums to target.
The same repeated number may be chosen from candidates unlimited number 
of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
*/

var combinationSum = function(candidates, target) {
    // strategy: sort candidates. recursively build solutions with >= candidates.
    candidates.sort((a, b) => a - b);
    const results = [];

    function combosum(offset, soln, target) {
        // base cases
        if (target === 0) {
            results.push(soln);
            return;
        }
        if (offset > candidates.length - 1) return;
        if (candidates[offset] > target) return;

        // recursive cases;
        for (let i = offset; i < candidates.length; i++) {
            combosum(i, soln.concat(candidates[i]), target - candidates[i]);
        }
    }
    combosum(0, [], target);

    return results;
};


// tests
// assume no zeros or negatives as there would not be a finite solution set otherwise
console.log(combinationSum([2, 3, 6, 7], 7)); // [[7],[2,2,3]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([1], 1))