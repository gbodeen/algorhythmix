/*
Given a collection of distinct integers, return all possible permutations.
*/

var permute = function(nums) {
    if (nums.length <= 1) return [nums];
    const permutations = [];

    nums.forEach((x, i) => {
        let subresults = permute([].concat(nums.slice(0, i), nums.slice(i + 1)));
        let xresults = subresults.map(partial => [].concat(x, ...partial));
        permutations.push(...xresults);
    });
    return permutations;
};
// literally of factorial complexity, unavoidably

// tests
console.log(permute([])); // []
console.log(permute([0])); // [[0]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([1, 2, 3, 4]));